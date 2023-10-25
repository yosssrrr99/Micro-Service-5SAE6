package com.example.eventmanagement.entities;

import com.example.eventmanagement.entities.EtatReservation;
import com.example.eventmanagement.entities.TypeCompte;
import lombok.*;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Long idUser;
    private Float balance ;
    @Temporal(TemporalType.DATE)
    Date Dateinscription;
    @Enumerated(EnumType.STRING)
    TypeCompte typecompte;
    private String nom;
    private String prenom;
    private String login;
    private String password;

    @Enumerated(EnumType.STRING)
    EtatReservation etatReservation;


    @ManyToMany(mappedBy = "users" , cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private Set<Event> events = new HashSet<>();




}
