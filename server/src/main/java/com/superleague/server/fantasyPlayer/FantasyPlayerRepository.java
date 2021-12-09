
package com.superleague.server.fantasyPlayer;
import com.superleague.server.fantasyPlayer.FantasyPlayer;
import com.superleague.server.players.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FantasyPlayerRepository extends JpaRepository<FantasyPlayer, Long> {

    @Query("SELECT s FROM fantasyplayers s WHERE s.playerID = ?1")
    Optional<FantasyPlayer> findFantasyPlayerByTeamPlayerId(Long id);

}

