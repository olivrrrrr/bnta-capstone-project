/*
package com.superleague.server.users;


import javax.persistence.*;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity (name = "User")
public class User {

    @Id
    @SequenceGenerator(
        name = "user_sequence",
        sequenceName = "user_sequence",
        allocationSize = 1
//        initialValue = 1
    )
    @GeneratedValue(
            strategy = SEQUENCE
    )

    private Long id;
    private String email;
    private String username;
    private String password;
    private String teamName;

}
*/
