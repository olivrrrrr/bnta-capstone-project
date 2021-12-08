
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

    @Autowired
    public FantasyPlayerService(FantasyPlayerRepository fantasyPlayerRepository) {this.fantasyPlayerRepository = fantasyPlayerRepository;}

    public void addFantasyPlayer(FantasyPlayer fantasyplayer) {
        fantasyPlayerRepository.save(fantasyplayer);
    }

    public void deleteFantasyPlayer(long id){
        fantasyPlayerRepository.deleteById(id);
    }

}

