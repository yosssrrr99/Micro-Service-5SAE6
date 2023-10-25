package com.example.eventmanagement.utils;

import com.example.eventmanagement.entities.ReservationEvent;
import lombok.*;

import javax.persistence.Entity;

@Getter
@Setter
@AllArgsConstructor
@ToString
@EqualsAndHashCode

public class ResponseTransfer {
    String message;
    ReservationEvent reservationEvent;
}
