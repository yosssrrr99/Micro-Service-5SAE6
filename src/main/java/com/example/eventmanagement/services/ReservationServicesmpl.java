package com.example.eventmanagement.services;

import com.example.eventmanagement.dto.ReservationDto;
import com.example.eventmanagement.entities.ReservationEvent;
import com.example.eventmanagement.repositories.IReservationRepository;
import com.example.eventmanagement.utils.ResponseTransfer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationServicesmpl {
    @Autowired
    private IReservationRepository reservationRepository;

    public ResponseTransfer addReservation(ReservationEvent reservation)  {

        reservationRepository.save(reservation);
        return new ResponseTransfer("Added Successfully", reservation);

    }

    public Iterable<ReservationEvent>getReservations(){
        return reservationRepository.findAll();
    }

    public ReservationEvent updateReservation(ReservationEvent reservation){
        ReservationEvent toBeUpdated = reservationRepository.findById(reservation.getIdRes()).orElse(null);
        toBeUpdated.setNbPerson(reservation.getNbPerson());
        toBeUpdated.setDateRes(reservation.getDateRes());
        return reservationRepository.save(toBeUpdated);
    }
    public void deleteReservation(Long id){
        reservationRepository.deleteById(id);
    }

    public ReservationDto add(ReservationDto entity, Object reservation) {
        return null;
    }

}
