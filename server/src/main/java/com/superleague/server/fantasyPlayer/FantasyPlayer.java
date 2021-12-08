package com.superleague.server.fantasyPlayer;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "fantasyplayers")
    public class FantasyPlayer {

        @Id
        @SequenceGenerator(
                name = "fantasyplayers_sequence",
                sequenceName = "fantasyplayers_sequence",
                allocationSize = 1
        )
        @GeneratedValue(
                strategy = GenerationType.SEQUENCE,
                generator = "fantasyplayers_sequence"
        )
        private Long id;
        private Long userID;
        private Long playerID;

    public FantasyPlayer(Long id, Long userID, Long playerID) {
        this.id = id;
        this.userID = userID;
        this.playerID = playerID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserID() {
        return userID;
    }

    public void setUserID(Long userID) {
        this.userID = userID;
    }

    public Long getPlayerID() {
        return playerID;
    }

    public void setPlayerID(Long playerID) {
        this.playerID = playerID;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof FantasyPlayer)) return false;
        FantasyPlayer that = (FantasyPlayer) o;
        return Objects.equals(getId(), that.getId()) && Objects.equals(getUserID(), that.getUserID()) && Objects.equals(getPlayerID(), that.getPlayerID());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getUserID(), getPlayerID());
    }
}


