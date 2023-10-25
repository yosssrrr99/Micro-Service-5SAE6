package com.example.eventmanagement.controllers;

import com.example.eventmanagement.entities.Event;
import com.example.eventmanagement.services.EventServicesmpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class EventRestController {

    @Autowired
     private EventServicesmpl service;
    @PostMapping("/addEvent")
    public Event addEvent(@RequestBody Event event){

        return service.saveEvent(event);
    }
    @GetMapping("/getAllEvents")
    public Iterable<Event> getEvent(){
        return service.getEvents();
    }


    @PutMapping("updateEvent/{id}")
    public Event updateEvent(@PathVariable("id") Long id , @RequestBody Event event){
        return service.updateEvent(id, event);
    }
    @DeleteMapping("deleteEvent/{id}")
    public void deleteEvent(@PathVariable Long id){
         service.deleteEvent(id);
    }

    @GetMapping("/getEventNom/{nom}")
    List<Event> getEvent(@PathVariable("nom") String nom){
        return service.retrieveEventByNom(nom);
    }


}
