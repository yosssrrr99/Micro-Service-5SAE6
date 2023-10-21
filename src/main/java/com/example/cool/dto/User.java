package com.example.cool.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Data
public class User {

    private Long iduser;
    private Float balance;
    private String nom;
    private String prenom;
    private String login;
    private String password;
    private Long restaurantid;
    private String preferences;
    private int age;
    private int weight;
    private String Gneder;
    private String allergie;


}