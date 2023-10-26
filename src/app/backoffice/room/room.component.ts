import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoomService } from 'src/app/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  
  title = 'RoomDashboard'
  id:any;
  Room:any;
  roomToUpdate:any ={};
  roomDetails:any;
  
 

  constructor(private roomService:RoomService) { 
    this.getRoomDetails();
  }

  ngOnInit(): void {
    this.Room = {
      id: null,
      capacity: null,
      placeDispo: null,
      state:null,
     
     }
     
   this.roomToUpdate = {
    idRoom: null,
    capacity: null,
    placeDispo: null,
    state:null,
    }
  }

  register(registerForm: NgForm) {
    this.roomService.createRoom(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getRoomDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getRoomDetails() {
    this.roomService.getAllRoom().subscribe(
      (resp: any) => {
        console.log(resp);
        this.roomDetails = resp;
        
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  

  deleteRoom(id:number) {
    this.roomService.deleteRoom(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getRoomDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(room: any){
    
    this.roomToUpdate = room;
    
  }

  updateRoom(){
    this.roomService.updateRoom(this.roomToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }


}

