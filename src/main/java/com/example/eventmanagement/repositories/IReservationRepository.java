package com.example.eventmanagement.repositories;

import com.example.eventmanagement.entities.EtatReservation;
import com.example.eventmanagement.entities.ReservationEvent;
import com.example.eventmanagement.entities.User;
import com.example.eventmanagement.services.ReservationServicesmpl;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface IReservationRepository extends CrudRepository<ReservationEvent, Long> {

  //  @Query("select  usr  from  ReservationEvent RE  join RE.users users   where  (usr.etatReservation =  :etatResrvation) ")
  //  List<User> findListEtudiant ( EtatReservation etatResrvation);
}
