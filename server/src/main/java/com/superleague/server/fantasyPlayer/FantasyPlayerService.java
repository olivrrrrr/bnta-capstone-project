
package com.superleague.server.fantasyPlayer;

import com.superleague.server.players.Player;
import com.superleague.server.players.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FantasyPlayerService {

    private final FantasyPlayerRepository fantasyPlayerRepository;
    private final PlayerRepository playerRepository;

    @Autowired
    public FantasyPlayerService(FantasyPlayerRepository fantasyPlayerRepository, PlayerRepository playerRepository) {
        this.fantasyPlayerRepository = fantasyPlayerRepository;
        this.playerRepository = playerRepository;
    }

    public void addFantasyPlayer(FantasyPlayer fantasyplayer) {
        //Add logic to check that player exists
        long playerID = fantasyplayer.getPlayerID();
        if (!playerRepository.existsById(playerID)) {
            throw new IllegalStateException("Player with id: " + playerID + " doesn't exist");
        } else {
            //Add logic to check player isn't already in the team
            //Add logic to check that user doesn't have more than 11 players
            //Might not need last one because on page we can have 11 'buttons' that correspond
            //to 4-4-2 formation
            fantasyPlayerRepository.save(fantasyplayer);
        }

    }

    public void deleteFantasyPlayer(long id) {

        //No need to check it exists because it should be displayed on the front-end

        fantasyPlayerRepository.deleteById(id);
    }


    public Player getPlayerByFantasyPlayerID(long id) {

        if (!playerRepository.existsById(id)) {
            throw new IllegalStateException("Player with id: " + id + " doesn't exist");
        } else {
            return playerRepository.getById(id);
        }

    }

//    public List<Player> getPlayersByTeamAndPosition(long id, String position) {
//
//        //Logic to check user exists
//
//
//    }
}

