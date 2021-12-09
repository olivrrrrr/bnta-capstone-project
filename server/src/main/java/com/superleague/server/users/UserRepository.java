package com.superleague.server.users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository ("users")
public interface UserRepository extends JpaRepository<User, Long> {


//    @Query("SELECT s FROM Student s WHERE s.email = ?1")
//    Optional<Student> findStudentByEmail(String email);
//
//    @Query("SELECT s FROM Student s WHERE s.id = ?1")
//    Optional<Student> findStudentByID(Long StudentId);

    Optional<User> getUserById(Long id);

    Optional<User> getUserByEmail(String email);

//    void addUser(User user);

//    void updateUser(Long id, User user);

//    @Query("DELETE FROM users WHERE id = ?1")
//    Optional<User> deleteUser(Long id);


//    int getWeeklyPointsById(Long id);

//    @Query("SELECT s FROM users WHERE")
//    int getWeeklyPointsByTeam(String teamName);

//
//    void setEmail(String email);

//
//    void updateWeeklyPoints(Long id);
}
  
  
  
    // User methods/logic
//    Optional <User> findUserById

