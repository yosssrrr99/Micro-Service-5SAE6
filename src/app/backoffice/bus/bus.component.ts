import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BusService } from 'src/app/bus.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  title = 'BusDashboard'
  id:any;
  Bus:any;
  busToUpdate:any ={};
  busDetails:any;
  
 

  constructor(private busService:BusService) { 
    this.getBusDetails();
  }

  ngOnInit(): void {
    this.Bus = {
      idB:null,
      ptDepart:null,
      ptArrive:null
     
     }
     
   this.busToUpdate = {
    idB:null,
    ptDepart:null,
    ptArrive:null
    }
  }

  register(registerForm: NgForm) {
    this.busService.createBus(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getBusDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getBusDetails() {
    this.busService.getAllBus().subscribe(
      (resp: any) => {
        console.log(resp);
        this.busDetails = resp;
        console.log(this.busDetails)
        
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  

  deleteBus(id:number) {
    this.busService.deleteBus(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getBusDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(Bus: any){
    
    this.busToUpdate = Bus;
  

    
  }

  updateBus(){
    this.busService.updateBus(this.Bus,this.Bus.idB).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}