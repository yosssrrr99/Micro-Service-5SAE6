package com.example.eventmanagement.dto;

import lombok.*;

import java.util.Date;
@Getter
@Setter
@ToString
@Builder
@AllArgsConstructor
public class ReservationDto {

    private Long idRes;
    private Date dateRes;
    private int nbPerson;





    private  int capacity;
    private Boolean state;
    private int numSalle;

}
