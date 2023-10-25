package com.example.eventmanagement.services;

import com.example.eventmanagement.dto.ReservationDto;
import com.example.eventmanagement.entities.Event;
import com.example.eventmanagement.entities.ReservationEvent;
import com.example.eventmanagement.entities.TypeCompte;
import com.example.eventmanagement.repositories.IEventRepository;
import com.example.eventmanagement.repositories.IReservationRepository;
import com.example.eventmanagement.repositories.userRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;
@Service
@RequiredArgsConstructor
@Transactional
@Slf4j
public class EventServicesmpl  {


@Autowired
    private IEventRepository repository;

@Autowired
private userRepository userRepository;
    public Event saveEvent (Event event){
        return repository.save(event);    }

    public Iterable<Event> getEvents(){
        return repository.findAll();
    }

    public Event updateEvent(Long id, Event event ){
        List<Event> events = repository.findByIdEvent(id);
        if (event.getDescription()!= null || event.getNom()!= null || event.getDuration()!= 0)
            events.get(0).setDescription(event.getDescription());
        events.get(0).setNom(event.getNom());
        events.get(0).setDuration(event.getDuration());
        return repository.save(events.get(0));


    }

    public void  deleteEvent(Long id){
         repository.deleteById(id);
    }

    public List<Event> retrieveEventByNom(String nom) {
        return repository.findByNom(nom);
    }

public void autoReservationForAnEvent (String nomEvent ) {
    //
  //  long acountUser = userRepository.countUserByTypeCount(TypeCompte.Etudiant);
  /*  Event event = repository.findEventByNom(nom);
    if (event.getReservationEvent().size() == 0) {
       // ReservationEvent reservationEvent=new ReservationEvent().
        int countEtudiant = userRepository. countUserByEvent(  event   );
        ReservationEvent reservationEvent = new ReservationEvent(new Date(),countEtudiant);

    }*/
}


}

