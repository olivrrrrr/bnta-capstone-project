//package com.superleague.server.fantasyPlayer;
//
//import com.superleague.server.players.Player;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RequestMapping("/api/v1/fantasyplayers")
//@RestController
//public class FantasyPlayerController {
//
//    private FantasyPlayerService fantasyplayerService;
//
//    @Autowired
//    public FantasyPlayerController(FantasyPlayerService fantasyplayerService) {this.fantasyplayerService = fantasyplayerService; }
//
//    // adding fantasy player
//    @PostMapping
//    public void addFantasyPlayer (@RequestBody FantasyPlayer fantasyplayer) {
//        fantasyplayerService.addFantasyPlayer(fantasyplayer);}
//
////    delete fantasy player
//    @DeleteMapping("{id}")
//    public void deleteFantasyPlayer(@PathVariable("id") long id) {
//        fantasyplayerService.deleteFantasyPlayer(id);}
//
//    //get player by fantasyplayer id
//    @GetMapping("{id}")
//    public Player getPlayerByFantasyPlayerID(@PathVariable("id") long id) {
//        return fantasyplayerService.getPlayerByFantasyPlayerID(id);
//    }
//
//
////    //get fantasy players by user id and position
////    @GetMapping("{id}/{position}")
////    public List<Player> getPlayersByTeamAndPosition(@PathVariable("id") long id, @PathVariable("position") String position) {
////        return fantasyplayerService.getPlayersByTeamAndPosition(id, position);
////    }
//
//    //delete fantasy team by user id
//
//    //get all instances of a player in teams by player id
//
//    }
//
