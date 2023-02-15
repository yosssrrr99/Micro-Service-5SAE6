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
public class Tables implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTable;
    private int NumTable;
    private int Capacity;
    private Boolean State;
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "tables")
    Set<Orders> ordersTable;
}
