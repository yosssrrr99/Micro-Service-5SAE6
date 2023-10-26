import { Component, OnInit } from '@angular/core';
import { ReservationRoomService } from '../reservation-room.service';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-reservation-room-front',
  templateUrl: './reservation-room-front.component.html',
  styleUrls: ['./reservation-room-front.component.css']
})
export class ReservationRoomFrontComponent implements OnInit {

  
  title='reservation Room'
  Reservation : any;
  resDetails: any;
  idRomm:any;
  room:any;

  constructor(private resService:ReservationRoomService,private roomService:RoomService){ 
    this.getResDetails();
  }

  ngOnInit(): void {
    this.roomService.getAllRoom().subscribe(data=>{
      this.room=data;
    })
    this.Reservation={
      idReservation:null,
      dateReservation:null,
      duration:null,
      nbPerson:null,
      room:null

    }
    
  }

  addReservation() {
    this.resService.createRes(this.Reservation,this.idRomm).subscribe(
      (resp) => {
        console.log(resp);
        this.getResDetails();
      },
      (err) => {
        console.log(this.Reservation)
        console.log(err);
      }
    );
  }

  getResDetails() {
    this.resService.getAllRes().subscribe(
      (resp: any) => {
        console.log(resp);
        this.resDetails = resp;
        
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  

  deleteRes(id:number) {
    this.resService.deleteRes(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getResDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
