package com.superleague.server.players;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class PlayerService {

    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(@Qualifier("players") PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }

    public void addPlayer(Player player) {
        //Implement logic to check player doesn't already exist

        playerRepository.save(player);
    }

    public int deletePlayer(Long playerID){
        boolean exists = playerRepository.existsById(playerID);
        if (!exists) throw new IllegalStateException("Player with id: " + playerID + " doesn't exist");
        else{
            playerRepository.deleteById(playerID);
            return 1;
        }
    }


//    @Transactional
//    public void updatePlayerName(Long playerId, String name){
//        Player player = playerRepository.findPlayerById(playerId).orElseThrow(()
//                -> new IllegalStateException("doesn't exist"));
//        if (name != null && name.length()>0 && !player.getName().equals(name)){
//            player.setName(name);
//        }
//    }
//
//    @Transactional
//    public int updatePlayerGoals(Long playerId, int goals){
//        Player player = playerRepository.findPlayerById(playerId).orElseThrow(()
//                -> new IllegalStateException("doesn't exist"));
//        if (player.getGoals()==goals){
//            int goalDifference = goals - player.getGoals();
//            player.setGoals(goals);
//            return goalDifference;
//        }
//        return 0;
//    }

    public void addPlayers(List<Player> players) {
        playerRepository.saveAll(players);
    }

    @Transactional
    public void updatePlayerGoals(Long playerID, int goals){
        Player player = playerRepository.findPlayerById(playerID)
                .orElseThrow(() -> new IllegalStateException("player not found"));
        int currentGoals = player.getGoals();
        if (currentGoals < goals){
            player.setGoals(goals);
            int diff = goals - currentGoals;
            player.setWeeklyPoints(player.getWeeklyPoints() + 5*diff);
        }
    }

    @Transactional
    public void updatePlayerAssists(Long playerID, int assists){
        Player player = playerRepository.findPlayerById(playerID)
                .orElseThrow(() -> new IllegalStateException("player not found"));
        int currentAssists = player.getAssists();
        if (currentAssists < assists){
            player.setAssists(assists);
            int diff = assists - currentAssists;
            player.setWeeklyPoints(player.getWeeklyPoints() + 2*diff);
        }
    }

    @Transactional
    public void updatePlayerYellows(Long playerID, int yellows){
        Player player = playerRepository.findPlayerById(playerID)
                .orElseThrow(() -> new IllegalStateException("player not found"));
        int currentYellows = player.getYellows();
        if (currentYellows < yellows){
            player.setYellows(yellows);
            int diff = yellows - currentYellows;
            player.setWeeklyPoints(player.getWeeklyPoints() - diff);
        }
    }

    @Transactional
    public void updatePlayerReds(Long playerID, int reds){
        Player player = playerRepository.findPlayerById(playerID)
                .orElseThrow(() -> new IllegalStateException("player not found"));
        int currentReds = player.getReds();
        if (currentReds < reds){
            player.setReds(reds);
            int diff = reds - currentReds;
            player.setWeeklyPoints(player.getWeeklyPoints() - 3*diff);
        }
    }

    @Transactional
    public void updatePlayerCleanSheets(Long playerID, int conceded, int appearances){
        Player player = playerRepository.findPlayerById(playerID)
                .orElseThrow(() -> new IllegalStateException("player not found"));
        int currentConceded = player.getConceded();
        int currentAppearances = player.getAppearances();
        //add check for position
        if (currentAppearances > appearances && currentConceded == conceded){
            int diff = appearances - currentAppearances;
            player.setWeeklyPoints(player.getWeeklyPoints() + 4*diff);
        }
    }
    @Transactional
    public void updatePlayerAppearances(Long playerID, int appearances){
        Player player = playerRepository.findPlayerById(playerID)
                .orElseThrow(() -> new IllegalStateException("player not found"));
        int currentConceded = player.getConceded();
        int currentAppearances = player.getAppearances();
        //add check for position
        if (currentAppearances > appearances){
            int diff = appearances - currentAppearances;
            player.setWeeklyPoints(player.getWeeklyPoints() + 2*diff);
        }
    }

    @Transactional
    public void updateAllPlayers(List<Player> players) {
        for (Player newPlayer : players){
            Long id = newPlayer.getId();
            Player currentPlayer = playerRepository.findPlayerById(id)
                    .orElseThrow(() -> new IllegalStateException("player not found"));
            currentPlayer.setWeeklyPoints(0);
            updatePlayerGoals(id, newPlayer.getGoals());
            updatePlayerAssists(id, newPlayer.getAssists());
            updatePlayerYellows(id, newPlayer.getYellows());
            updatePlayerReds(id, newPlayer.getReds());
            updatePlayerCleanSheets(id, newPlayer.getConceded(), newPlayer.getAppearances());
            updatePlayerAppearances(id, newPlayer.getAppearances());
            currentPlayer.setTotalPoints(currentPlayer.getTotalPoints() + currentPlayer.getWeeklyPoints());
        }
    }

    public Player getPlayerById(long id) {
        return playerRepository.findPlayerById(id).get();
    }

    public List<Player> getAllPlayers() {
        return playerRepository.findAll();
    }

    public List<Player> findPlayerByPosition(String position) {
         return playerRepository.findPlayersByPosition(position);
    }
}
