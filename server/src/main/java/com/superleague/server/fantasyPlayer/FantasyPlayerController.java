package com.superleague.server.fantasyPlayer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/api/v1/fantasyplayers")
@RestController
public class FantasyPlayerController {

    private FantasyPlayerService fantasyplayerService;

    @Autowired
    public FantasyPlayerController(FantasyPlayerService fantasyplayerService) {this.fantasyplayerService = fantasyplayerService; }

    // adding fantasy player
    @PostMapping
    public void addFantasyPlayer (@RequestBody FantasyPlayer fantasyplayer) {fantasyplayerService.addFantasyPlayer(fantasyplayer);}

//    delete fantasy player
    @DeleteMapping("{id}")
    public void deleteFantasyPlayer(@PathVariable("id") long id) {fantasyplayerService.deleteFantasyPlayer(id);}

    }

