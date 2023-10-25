package com.example.eventmanagement.controllers;

import com.example.eventmanagement.dto.ReservationDto;
import com.example.eventmanagement.entities.ReservationEvent;
import com.example.eventmanagement.mappers.ReservationMappers;
import com.example.eventmanagement.repositories.IReservationRepository;
import com.example.eventmanagement.services.ReservationServicesmpl;
import com.example.eventmanagement.utils.ResponseTransfer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ReservationRestController {
    @Autowired
    private ReservationServicesmpl reservationService;

    @PostMapping("/addReservation")
    public ResponseTransfer addReservation(@RequestBody ReservationEvent reservation) {
        Iterable<ReservationEvent> allReservations = getAllReservation();
        for ( ReservationEvent reservationEvent : allReservations)
        {
            if (reservationEvent.getDateRes().compareTo(reservation.getDateRes()) == 0){
                return  new ResponseTransfer(" Already Reserved",reservationEvent);
            }
        }
        return reservationService.addReservation(reservation);

    }



    @GetMapping("/getAllReservations")
    public Iterable<ReservationEvent>getAllReservation(){
        return reservationService.getReservations();
    }

    @PutMapping("/updateReservation/{id}")
    public ReservationEvent updateReservation (@PathVariable Long id , @RequestBody ReservationEvent reservation){
        ReservationEvent Reserve = new ReservationEvent();
        Reserve.setIdRes(id);
        Reserve.setDateRes(reservation.getDateRes());
        Reserve.setNbPerson(reservation.getNbPerson());
       // System.out.println(Reserve);
        return reservationService.updateReservation(Reserve);
    }

    @DeleteMapping("deleteReservation/{id}")
    public void deleteReservation(@PathVariable Long id){
        reservationService.deleteReservation(id);
    }


    @PostMapping("/addReservationDto")
    public ReservationDto add(@RequestBody ReservationDto entity){
        return reservationService.add(entity, getAllReservation());
    }

   /* @GetMapping("/getAllReservationDto")
    public List<ReservationDto>retrieveAll(){
 return reservationService.getReservations();
    }*/


}









