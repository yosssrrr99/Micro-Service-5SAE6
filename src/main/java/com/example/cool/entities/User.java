package com.example.cool.entities;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "User")
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUser;
    private String FirstName;
    private String LastName;
    private int Age;
    private String Gneder;
    private int Weight;
    private String email;
    private Date isCreatedAt;
    private int jetons;



}
