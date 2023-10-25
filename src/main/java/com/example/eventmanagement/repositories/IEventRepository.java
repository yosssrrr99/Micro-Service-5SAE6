package com.example.eventmanagement.repositories;

import com.example.eventmanagement.entities.Event;
import com.example.eventmanagement.entities.Location;
import com.example.eventmanagement.entities.TypeCompte;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IEventRepository extends CrudRepository<Event, Long> {
    List<Event> findByIdEvent(Long id);
    //@Query("SELECT CASE WHEN COUNT(appt) > 0 THEN true ELSE false END FROM Appointment appt WHERE ()")
  //  boolean isfoundEvent (@Param("startime") LocalTime startime, @Param("endtime") LocalTime endtime  );
Event findEventByNom(String nom);
List<Event> findByNom(String nom);



}
