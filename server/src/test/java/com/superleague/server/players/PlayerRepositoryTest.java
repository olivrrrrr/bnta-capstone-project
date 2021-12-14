package com.superleague.server.players;

import com.sun.tools.jconsole.JConsoleContext;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@DataJpaTest
class PlayerRepositoryTest {

    @Autowired
    private PlayerRepository underTest;

    private final List<Player> playerData = List.of(
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

//    PlayerRepositoryTest(PlayerRepository underTest) {
//        this.underTest = underTest;
//        this.underTest.saveAll()
//    }


    @BeforeEach
    void setUp() {
        underTest.saveAll(playerData);
    }

    @Test
    void findPlayerById() {
        //given
        long id = 1l;
        //when
        Player acutal = underTest.findPlayerById(id).get();
        Player expected = new Player(1l,
                "M. Poundjé",
                "https://media.api-sports.io/football/players/1263.png",
                "Bordeaux",
                0, 0, 0, 0, 0, 0,
                "Midfielder",
                0, 0,
                "Ligue 1"
        );
        //then
        System.out.println("expected: " + expected);
        System.out.println("actual: " + acutal);
        assertEquals(expected, acutal);

        //when
        List<Player> actual = underTest.findAll();
        List <Player> expected2 = playerData;
        //then
        assertEquals(expected2, actual);

    }

    @Test
    void findPlayersByPosition() {
        //given
        String position = "Attacker";
        //when
        List<Player> acutal = underTest.findPlayersByPosition(position);
        List<Player> expected = List.of(new Player(4l,
                "M. Poundjé The Second",
                "https://media.api-sports.io/football/players/1263.png",
                "Bordeaux",
                0, 0, 0, 0, 0, 0,
                "Attacker",
                0, 0,
                "Ligue 1"
        ));
        //then
        System.out.println("expected: " + expected);
        System.out.println("actual: " + acutal);
        assertEquals(expected, acutal);
    }

    /*@Test
    @Disabled
    void findAllPlayers(){
        //when
        List<Player> actual = underTest.findAll();
        List <Player> expected = playerData;
        //then
        assertEquals(expected, actual);
    }*/
}