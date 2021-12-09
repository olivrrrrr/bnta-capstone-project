package com.superleague.server.users;

import com.superleague.server.exceptions.ResourceNotFound;
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

    @Autowired
    public UserService(@Qualifier("users") UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public Optional<User> getUserById(Long id) {
        boolean exists = doesPersonWithIdExists(id);
        if (!exists) {
            throw new IllegalStateException("Account with id " + id + " not found");
        }
        return userRepository.getUserById(id); }


    public Optional<User> getUserByEmail(String email) {
        boolean exists = doesPersonWithEmailExists(email);
        if (!exists) {
            throw new IllegalStateException("Account with email " + email + " not found");
        }
        return userRepository.getUserByEmail(email); }


    public void addUser(User user) {
        userRepository.addUser(user);
        return;
    }

    public String updateUser(Long id, User user) {
        boolean exists = doesPersonWithIdExists(id);
        if (!exists) {
            throw new IllegalStateException("Account with id " + id + " not found");
     }
        this.userRepository.updateUser(id, user);
        return "User Details Updated";
    }

    public void deleteUser(Long id) {
        boolean exists = doesPersonWithIdExists(id);
        if (!exists) {
            throw new IllegalStateException("person with id " + id + " not found");
        }
        userRepository.deleteById(id);
    }

    public int getWeeklyPointsById(Long id) {
        return userRepository.getWeeklyPointsById(id);
         }

     public int getWeeklyPointsByTeam(String teamName) {
        return userRepository.getWeeklyPointsByTeam(teamName);
    }

        @Transactional
    public void updateWeeklyPoints(Long id, Integer weeklyPoints) {
        User user = getUserById(id).orElseThrow(() ->
                new ResourceNotFound("user with this id:" + id + " doesn't exist")
        );
        user.setWeeklyPoints(weeklyPoints);
//        userRepository.updateWeeklyPoints(id);
    }
        @Transactional
    public void updateEmail(Long id, String email) {
        User user = getUserById(id).orElseThrow(() ->
                new ResourceNotFound("user with this id:" + id + " doesn't exist")
        );
        if (email != null && email.length() > 0 && !Objects.equals(user.getEmail(), email))
        user.setEmail(email);
//        userRepository.updateUser(user.getEmail());
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


//    public int deleteSpell(long id) {
//
//        if (!exists) {
//            throw new IllegalStateException("person with id " + id + " not found");
//        }
//        return spellDAO.deleteSpell(id);
//    }
}
