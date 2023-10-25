package com.example.eventmanagement.entities;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "reservationEvent")
public class ReservationEvent implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idRes;
    @JsonFormat(pattern="yyyy-MM-dd")
    private Date dateRes;
    private int nbPerson;


    public ReservationEvent(Date dateRes, int nbPerson) {
        this.dateRes = dateRes;
        this.nbPerson = nbPerson;
    }

    public void setIdRes(Long idRes) {
        this.idRes = idRes;
    }

    public void setDateRes(Date dateRes) {
        this.dateRes = dateRes;
    }

    public void setNbPerson(int nbPerson) {
        this.nbPerson = nbPerson;
    }

    public Long getIdRes() {
        return idRes;
    }

    public Date getDateRes() {
        return dateRes;
    }

    public int getNbPerson() {
        return nbPerson;
    }

    //ManyToMany withEvent
    @ManyToMany(fetch = FetchType.EAGER,
    cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE
    },
    mappedBy = "reservationEvent")
    private Set<Event> events = new HashSet<>();

    public ReservationEvent() {
    }
}

