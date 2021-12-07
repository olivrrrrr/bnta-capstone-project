package com.superleague.server.players;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public class PlayerService {

    private PlayerRepository playerRepository;

    @Autowired
    public PlayerService(@Qualifier("database") PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public void addPlayer(Player player) {
        //Implement logic to check player doesn't already exist

        playerRepository.save(player);
    }

    public void deletePlayer(Long playerID){
        boolean exists = playerRepository.existsById(playerID);
        if (!exists) throw new IllegalStateException("Player with id: " + playerID + " doesn't exist");
        playerRepository.deleteById(playerID);
    }


    @Transactional
    public void updatePlayerName(Long playerId, String name){
        Player player = playerRepository.findPlayerById(playerId).orElseThrow(()
                -> new IllegalStateException("doesn't exist"));
        if (name != null && name.length()>0 && !player.getName().equals(name)){
            player.setName(name);
        }
    }

    @Transactional
    public int updatePlayerGoals(Long playerId, int goals){
        Player player = playerRepository.findPlayerById(playerId).orElseThrow(()
                -> new IllegalStateException("doesn't exist"));
        if (player.getGoals()==goals){
            int goalDifference = goals - player.getGoals();
            player.setGoals(goals);
            return goalDifference;
        }
        return 0;
    }

    public void addPlayers(List<Player> players) {
    }
}
