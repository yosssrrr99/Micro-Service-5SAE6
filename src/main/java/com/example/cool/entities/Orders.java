package com.example.cool.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@RequiredArgsConstructor
public class Orders implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOrders;
    @Temporal(TemporalType.DATE)
    private Date DateOrder;
    private int NbPlace;
    private Long idUser;
    @Enumerated(EnumType.STRING)
    private TypeRes status;
    @ManyToOne
    Tables tables;

    @ManyToMany
    private Set<Dishs> dishs;
}
