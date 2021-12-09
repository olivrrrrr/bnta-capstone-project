package com.superleague.server.players;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;


//every endpoint in this class should only be accessible by an admin user
@RequestMapping("/api/v1/players")
@RestController
 public class PlayerController {

    private PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {this.playerService = playerService; }

/*    @PostMapping("addOne")
    public int addPlayer (@RequestBody Player player) {
        playerService.addPlayer(player);
        return 1;
    }*/

    @PostMapping("addMany")
    public int addManyPlayers (@RequestBody List<Player> players) {
        playerService.addPlayers(players);
        return 1;
    }

//    @GetMapping("{id}")
//    public Player getPlayer(){
//
//    }


    @PutMapping("updateAllPlayers")
    public void updateAllPlayers(List<Player> players){
        /*
        get all players in our db
        get a list of players from fetch

        for i=0 to length of players
            gameweekPts
            int gd = update player goals

            int ad = update player assists

            update player clean sheets
            ...
            gameweekPts += (gd*5) + (ad*2) + ...
            player.setWeekPts(gameweekPts)
            player.incrementTotal(gameweekPts)
         */
        playerService.updateAllPlayers(players);
    }


}
