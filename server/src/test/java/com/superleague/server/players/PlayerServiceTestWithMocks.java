package com.superleague.server.players;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class PlayerServiceTestWithMocks {

    @Mock private PlayerRepository pr;
    @Autowired private PlayerService underTest;


    @BeforeEach
    void setUp() {
        underTest = new PlayerService(pr);
    }

    @Test
    void canAddPlayer() {
        //given
        Player player = new Player(1l,
                "M. Poundjé",
                "https://media.api-sports.io/football/players/1263.png",
                "Bordeaux",
                0, 0, 0, 0, 0, 0,
                "Midfielder",
                0, 0,
                "Ligue 1"
        );
        //when
        underTest.addPlayer(player);
        //then
        ArgumentCaptor<Player> playerArgumentCaptor = ArgumentCaptor.forClass(Player.class);
        verify(pr).save(playerArgumentCaptor.capture());
        Player capturedPlayer = playerArgumentCaptor.getValue();
        assertEquals(player, capturedPlayer);
    }

    @Test
    void canDeletePlayerThatExists() {
        //given
        long id = 1l;
        given(pr.existsById(id)).willReturn(true);
        //when
        int actual = underTest.deletePlayer(id);
        int expected = 1;
        //then
        ArgumentCaptor<Long> idArgumentCaptor = ArgumentCaptor.forClass(Long.class);
        verify(pr).existsById(idArgumentCaptor.capture());
        verify(pr).deleteById(idArgumentCaptor.capture());

        assertEquals(expected, actual);
    }

    @Test
    void canDeletePlayerThatDoesNotExist() {
        //given
        long id = 1l;
        given(pr.existsById(id)).willReturn(false);

        //int actual = underTest.deletePlayer(id);
        //when
        String expected = String.format("Player with id: %d doesn't exist", id);
        //then
        Exception exception = assertThrows(IllegalStateException.class, ()-> underTest.deletePlayer(id));
        assertEquals(expected, exception.getMessage());
    }

    @Test
    @Disabled
    void addPlayers() {
    }

    @Test
    @Disabled
    void updatePlayerGoals() {
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

    @Test
    @Disabled
    void getPlayerById() {
    }

    @Test
    @Disabled
    void getAllPlayers() {
    }

    @Test
    @Disabled
    void findPlayerByPosition() {
    }
}