package com.superleague.server.users;

import com.superleague.server.exceptions.ResourceNotFound;
import com.superleague.server.players.Player;
import com.superleague.server.players.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PlayerService playerService;

    @Autowired
    public UserService(@Qualifier("users") UserRepository userRepository, PlayerService playerService){
        this.userRepository = userRepository;
        this.playerService = playerService;
    }

    public User getUserById(Long id) {
        boolean exists = doesPersonWithIdExists(id);
        if (!exists) {
            throw new IllegalStateException("Account with id " + id + " not found");
        }
        return userRepository.findById(id).get();
    }


    public User getUserByEmail(String email) {
//        boolean exists = doesPersonWithEmailExists(email);
//        if (!exists) {
//            throw new IllegalStateException("Account with email " + email + " not found");
//        }
        return userRepository.getUserByEmail(email).get();
    }


    public void addUser(User user) {
        userRepository.save(user);
        return;
    }


    public void deleteUser(Long id) {
        boolean exists = doesPersonWithIdExists(id);
        if (!exists) {
            throw new IllegalStateException("person with id " + id + " not found");
        }
        userRepository.deleteById(id);
    }


    public void updateAllUserPoints() {
        //Update all weekly points
        userRepository.findAll().stream().forEach(user -> this.updateWeeklyPoints(user.getId()));
        //Update all total points
        userRepository.findAll().stream().forEach(user -> this.updateTotalPoints(user.getId()));
    }

    @Transactional
    public void updateWeeklyPoints(Long id) {

        User user = this.getUserById(id);

        int weeklyPoints = userRepository.getUserById(id).get().getTeam().stream()
                .reduce(0, (result, player) -> result + player.getWeeklyPoints(), Integer::sum);

        user.setWeeklyPoints(weeklyPoints);

        userRepository.save(user);

    }

    @Transactional
    public void updateTotalPoints(Long id) {

        User user = this.getUserById(id);

        int totalPoints = userRepository.getUserById(id).get().getTeam().stream()
                .reduce(0, (result, player) -> result + player.getTotalPoints(), Integer::sum);

        user.setTotalPoints(totalPoints);

        userRepository.save(user);

    }

        @Transactional
    public void updateEmail(Long id, String email) {
        User user = this.getUserById(id);
        user.setEmail(email);
        userRepository.save(user);

//   EMAIL VALIDATION: (not complete)
//   if (email != null && email.length() > 0 && !Objects.equals(user.getEmail(), email)){
    }
        @Transactional
    public void updatePassword(Long id, String password){
         User user = this.getUserById(id);
         user.setPassword(password);
         userRepository.save(user);
    }

    @Transactional
    public void addFantasyPlayer(Long playerId, Long userId) {
        User user = this.getUserById(userId);
        Player player = playerService.getPlayerById(playerId);

        //If the player already exists, throw new exception
        if(user.findPlayerInTeam(playerId) >= 1) {
            throw new IllegalStateException("Player already in team");
        }
        //If there are too many players from one club
        if(user.countPlayersFromAClub(player.getTeamName()) >= 2) {
            throw new IllegalStateException("Too many players from one club");
        }
        //If there are too many players from one league
        if(user.countPlayersFromLeague(player.getLeagueName()) > 3){
            throw new IllegalStateException("Too many players from the same league");
        }

        user.addPlayerToTeam(player);
        userRepository.save(user);
    }

    @Transactional
    public void deleteFantasyPlayer(Long playerId, Long userId) {
        User user = this.getUserById(userId);
        Player player = playerService.getPlayerById(playerId);
        if(user.findPlayerInTeam(playerId) == 0)
        {
            throw new IllegalStateException("That player isn't in your team you muppet");
        }
        user.deletePlayerFromTeam(player);
        userRepository.save(user);
    }


    private boolean doesPersonWithIdExists(long id) {
        return userRepository
                .findAll()
                .stream()
                .anyMatch(p -> p.getId() == id);
    }
    private boolean doesPersonWithEmailExists(String email) {
        return userRepository
                .findAll()
                .stream()
                .anyMatch(p -> p.getEmail() == email);
    }

    @Transactional
    public void saveTeam(Set<Player> team, long userId) {
        User user = this.getUserById(userId);

        user.setTeam(team);
        userRepository.save(user);

    }

    public List<User> getLeaderboard() {
        return userRepository.getLeaderboard();
    }
}
