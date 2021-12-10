package com.superleague.server.users;

import com.superleague.server.players.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/v1/users")
public class UserController{

        private UserService userService;

        @Autowired
        public UserController(UserService userService){
            this.userService = userService;
        }

        @GetMapping("id={id}")
        public Optional<User> getUserById(@PathVariable("id") Long id){

                return userService.getUserById(id);
        }

        @GetMapping("email={email}")
        public Optional<User> getUserByEmail(@PathVariable("email") String email){
        return userService.getUserByEmail(email);
        }

        @PutMapping("player={playerId}/user={userId}")
        public void addFantasyPlayer(@PathVariable("playerId") Long playerId, @PathVariable("userId") Long userId) {
                userService.addFantasyPlayer(playerId, userId);
        }

        @PostMapping("/addUser")
        public int addUser (@RequestBody User user) {
        userService.addUser(user);
        return 1;
        }

        @PutMapping("{id}/email")
        public void updateEmail(@PathVariable("id") Long id, String email) {
            userService.updateEmail(id, email);
        }

        @PutMapping("{id}/password")
        public void updatePassword(@PathVariable("id") Long id, String password) {
            userService.updatePassword(id, password);
        }




//        @PutMapping("{id}")
//        public void updateUser(@PathVariable("id") Long id,
//                                @RequestParam(required = false) String email,
//                                @RequestParam(required = false) String username,
//                                @RequestParam(required = false) String password,
//                                @RequestParam(required = false) String teamName) {
//            // handle nulls in logic
//            userService.updateUser(
//                    id,
//                    email,
//                    username,
//                    password,
//                    teamName
//                    );
//        }

        @PutMapping
        public void updateAllUsers () {
                userService.updateAllUserPoints();
        }

        @DeleteMapping
        public void deleteUser(@PathVariable("id") Long id){
            userService.deleteUser(id);
        }

}
