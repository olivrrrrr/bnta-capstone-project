package com.superleague.server.userTeam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/userteam")
@RestController
public class UserTeamController {

    private UserTeamService userTeamService;

    @Autowired
    public UserTeamController(UserTeamService userTeamService) {this.userTeamService = userTeamService;}
//
//    @PostMapping
//    public int addUserTeam (@RequestBody UserTeam userTeam){
//        userTeamService.addUserTeam(userTeam);
//        return
//    }
}
