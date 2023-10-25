package com.example.eventmanagement.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "location")
public class Location implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long idSalle;
    private  int capacity;
    private Boolean state;
    private int NumSalle;

//OneToOne with Event

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name="event_id")
    private Event event;

    public Location() {
    }

    public Long getIdSalle() {
        return idSalle;
    }

    public void setIdSalle(Long idSalle) {
        this.idSalle = idSalle;
    }

    public int getCapacity() {
        return capacity;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public Boolean getState() {
        return state;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

    public int getNumSalle() {
        return NumSalle;
    }

    public void setNumSalle(int numSalle) {
        NumSalle = numSalle;
    }

//    @Override
//    public String toString() {
//        return "Location{" +
//                "idSalle=" + idSalle +
//                ", capacity=" + capacity +
//                ", state=" + state +
//                ", NumSalle=" + NumSalle +
//                ", event=" + event +
//                '}';
//    }
}
