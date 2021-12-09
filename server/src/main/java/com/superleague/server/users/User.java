
package com.superleague.server.users;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.superleague.server.players.Player;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

import java.util.Objects;

import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table (name = "users")
public class User {


    @Id
    @SequenceGenerator(
        name = "user_sequence",
        sequenceName = "user_sequence",
        allocationSize = 1,
         initialValue = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE
    )
        private Long id;
        private String email;
        private String username;
        private String password;
        private String teamName;
        private Integer weeklyPoints;
        private Integer totalPoints;

        @JsonIgnore
        @ManyToMany(mappedBy = "playersUsers")
        private Set<Player> team = new HashSet<>();

    public Set<Player> getTeam() {
        return team;
    }

    public void setTeam(Set<Player> team) {
        this.team = team;
    }


    public User() {
        super();
    }

    public User( String email, String username, String password, String teamName,
                Integer weeklyPoints, Integer totalPoints) {
        super();
        this.email = email;
        this.username = username;
        this.password = password;
        this.teamName = teamName;
        this.weeklyPoints = weeklyPoints;
        this.totalPoints = totalPoints;
    }

    public void addPlayerToTeam(Player player) {
        team.add(player);
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public Integer getWeeklyPoints() {
        return weeklyPoints;
    }

    public void setWeeklyPoints(Integer weeklyPoints) {
        this.weeklyPoints = weeklyPoints;
    }

    public Integer getTotalPoints() {
        return totalPoints;
    }

    public void setTotalPoints(Integer totalPoints) {
        this.totalPoints = totalPoints;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", teamName='" + teamName + '\'' +
                ", weeklyPoints=" + weeklyPoints +
                ", totalPoints=" + totalPoints +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id.equals(user.id) && email.equals(user.email) && username.equals(user.username) && password.equals(user.password) && teamName.equals(user.teamName) && weeklyPoints.equals(user.weeklyPoints) && totalPoints.equals(user.totalPoints);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, username, password, teamName, weeklyPoints, totalPoints);
    }
}

