package com.superleague.server.users;

import com.superleague.server.players.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository ("users")
public interface UserRepository extends JpaRepository<User, Long> {


    Optional<User> getUserById(Long id);

    Optional<User> getUserByEmail(String email);



}


