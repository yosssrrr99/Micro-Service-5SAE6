package com.example.cool.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

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
    private String Description;
    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL,mappedBy = "dishs")
    Set<Orders> orders;
}
