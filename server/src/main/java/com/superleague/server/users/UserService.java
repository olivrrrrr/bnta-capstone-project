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

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PlayerService playerService;

    @Autowired
    public UserService(@Qualifier("users") UserRepository userRepository, PlayerService playerService){
        this.userRepository = userRepository;
        this.playerService = playerService;
    }

    public Optional<User> getUserById(Long id) {
        boolean exists = doesPersonWithIdExists(id);
        if (!exists) {
            throw new IllegalStateException("Account with id " + id + " not found");
        }
        return userRepository.getUserById(id);
    }


    public Optional<User> getUserByEmail(String email) {
        boolean exists = doesPersonWithEmailExists(email);
        if (!exists) {
            throw new IllegalStateException("Account with email " + email + " not found");
        }
        return userRepository.getUserByEmail(email); }


    public void addUser(User user) {
        userRepository.save(user);
        return;
    }
//
//    public String updateUser(Long id, User user) {
//        boolean exists = doesPersonWithIdExists(id);
//        if (!exists) {
//            throw new IllegalStateException("Account with id " + id + " not found");
//     }
//        this.userRepository.updateUser(id, user);
//        return "User Details Updated";
//    }

    public void deleteUser(Long id) {
        boolean exists = doesPersonWithIdExists(id);
        if (!exists) {
            throw new IllegalStateException("person with id " + id + " not found");
        }
        userRepository.deleteById(id);
    }
//
//    public int getWeeklyPointsById(Long id) {
//        return userRepository.getWeeklyPointsById(id);
//         }
//
//     public int getWeeklyPointsByTeam(String teamName) {
//        return userRepository.getWeeklyPointsByTeam(teamName);
//    }

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
         User user = getUserById(id).orElseThrow(() ->
                new ResourceNotFound("user with this id:" + id + " doesn't exist")
        );
        user.setPassword(password);
//        userRepository.updateUser(user.getPassword())
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

    public void updateAllUsers(List<User> userList) {

    }

    @Transactional
    public void addFantasyPlayer(Long playerId, Long userId) {
        User user = userRepository.findById(userId).get();
        Player player = playerService.getPlayerById(playerId);

        user.addPlayerToTeam(player);
        userRepository.save(user);
    }


//    public int deleteSpell(long id) {
//
//        if (!exists) {
//            throw new IllegalStateException("person with id " + id + " not found");
//        }
//        return spellDAO.deleteSpell(id);
//    }
}
