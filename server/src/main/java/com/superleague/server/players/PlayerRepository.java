package com.superleague.server.players;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository("players")
public interface PlayerRepository extends JpaRepository<Player, Long> {


    Optional<Player> findPlayerById(Long playerID);

//    @Query("SELECT s FROM players s WHERE s.position = ?1")
//    List<Player> findPlayersByPosition(String position);

}
