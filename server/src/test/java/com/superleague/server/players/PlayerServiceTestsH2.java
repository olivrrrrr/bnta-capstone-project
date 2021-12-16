package com.superleague.server.players;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;


@DataJpaTest
public class PlayerServiceTestsH2 {


    @Autowired private PlayerRepository pr;
    @Autowired private PlayerService underTest;


    private final List<Player> playerDataInitial = List.of(
            new Player(1l,
                    "M. Poundjé",
                    "https://media.api-sports.io/football/players/1263.png",
                    "Bordeaux",
                    0, 0, 0, 0, 0, 0,
                    "Midfielder",
                    0, 0,
                    "Ligue 1"
            ),
            new Player(2l,
                    "Y. Pele",
                    "https://media.api-sports.io/football/players/1898.png",
                    "Marseille",
                    0, 0, 0, 0, 0, 0,
                    "Goalkeeper",
                    0, 0,
                    "Ligue 1"
            ),
            new Player(
                    3l,
                    "L. Baal",
                    "https://media.api-sports.io/football/players/2193.png",
                    "Stade Brestois 29",
                    0, 0, 0, 0, 0, 0,
                    "Defender",
                    0, 0,
                    "Ligue 1"
            ),
            new Player(4l,
                    "M. Poundjé The Second",
                    "https://media.api-sports.io/football/players/1263.png",
                    "Bordeaux",
                    0, 0, 0, 0, 0, 0,
                    "Attacker",
                    0, 0,
                    "Ligue 1"
            )
    );

    private final List<Player> playerDataToUpdate = List.of(
            new Player(1l,
                    "M. Poundjé",
                    "https://media.api-sports.io/football/players/1263.png",
                    "Bordeaux",
                    3, 1, 0, 0, 1, 3,
                    "Midfielder",
                    0, 0,
                    "Ligue 1"
            ),
            new Player(2l,
                    "Y. Pele",
                    "https://media.api-sports.io/football/players/1898.png",
                    "Marseille",
                    2, 0, 0, 0, 0, 1,
                    "Goalkeeper",
                    0, 0,
                    "Ligue 1"
            ),
            new Player(
                    3l,
                    "L. Baal",
                    "https://media.api-sports.io/football/players/2193.png",
                    "Stade Brestois 29",
                    1, 0, 1, 1, 0, 0,
                    "Defender",
                    0, 0,
                    "Ligue 1"
            ),
            new Player(4l,
                    "M. Poundjé The Second",
                    "https://media.api-sports.io/football/players/1263.png",
                    "Bordeaux",
                    4, 2, 0, 0, 0, 3,
                    "Attacker",
                    0, 0,
                    "Ligue 1"
            )
    );

    @BeforeEach
    void setUp() {
        pr.saveAll(playerDataInitial);
        underTest = new PlayerService(pr);
    }

    @AfterEach
    void tearDown() {
        pr.deleteAll();
    }

    @Test
    void updatePlayerGoalsWhenScored() {
        //given
        //when
        underTest.updatePlayerGoals(4l, 2);
        Player actual = pr.findPlayerById(4l).get();
        Player expected = new Player(4l,
                "M. Poundjé The Second",
                "https://media.api-sports.io/football/players/1263.png",
                "Bordeaux",
                4, 2, 0, 0, 0, 3,
                "Attacker",
                10, 10,
                "Ligue 1"
        );
        //then
        assertEquals(expected, actual);
    }

    @Test
    @Disabled
    void updatePlayerAssists() {
    }

    @Test
    @Disabled
    void updatePlayerYellows() {
    }

    @Test
    @Disabled
    void updatePlayerReds() {
    }

    @Test
    @Disabled
    void updatePlayerCleanSheets() {
    }

    @Test
    @Disabled
    void updatePlayerAppearances() {
    }

    @Test
    @Disabled
    void updateAllPlayers() {
    }
}
