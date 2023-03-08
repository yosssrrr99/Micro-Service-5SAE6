package com.example.cool.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
@Getter
@Setter
@Entity
@Table(name = "Donnation")
public class Donnation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDonnation;
    private String FirstName;
    private String LastName;
    private String email;
    private Date isCreatedAt;
}
