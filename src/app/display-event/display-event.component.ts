import { Component, OnInit } from '@angular/core';
import { Events } from '../Model/events.model';
import { EventService } from '../Services/event.service';
import { ReservationService } from '../Services/reservation.service';
import { Reservations } from '../Model/reservations.model';

@Component({
  selector: 'app-display-event',
  templateUrl: './display-event.component.html',
  styleUrls: ['./display-event.component.css']
})
export class DisplayEventComponent implements OnInit {
  events : Events[]=[]
  animal: any;
  name: any;
idEvent : number = 0;
price : number = 0;
  reserve : boolean = false

  constructor( private eventService : EventService ,private reservationService : ReservationService ) { 
    this.eventService.getAll().subscribe(data=>{
      this.events = data 
    })
  } 

  toggleReserve(idEvent:any){
    this.idEvent = parseInt(idEvent)
    this.reserve = true
    this.reserved = false
  }
  nbPlace : number= 0
  reserved : boolean = false
  Reserve()
  {
    let reservation = new Reservations()
    reservation.nbPerson = this.nbPlace
    reservation.idRes = this.idEvent
    reservation.price = this.price
    this.reservationService.AddReservation(reservation).subscribe(res=> {
      this.reserve = false
      this.reserved = true
      this.reservationService.SenMailReservation().subscribe(res=> console.log(res))
    })

  }

  onKeyUp(event : any){

    this.price = this.nbPlace*7
    
  }

  ngOnInit(): void {
  }
  

}
