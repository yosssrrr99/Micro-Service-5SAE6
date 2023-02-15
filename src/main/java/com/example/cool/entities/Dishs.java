package com.example.cool.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@Setter
@ToString
public class Dishs implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDish;
    private String NameDish;
    @Enumerated(EnumType.STRING)
    private TypeDish TypeDish;
    private float priceDish;
    @ManyToOne
    Orders orders;
}
