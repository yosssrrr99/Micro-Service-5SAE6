import { Component, OnInit } from '@angular/core';
import { AbonementService } from '../abonement.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-abonement-front',
  templateUrl: './abonement-front.component.html',
  styleUrls: ['./abonement-front.component.css']
})
export class AbonementFrontComponent implements OnInit {

 idBus:any;
 bus:any;
  Abonement:any;
  constructor(private abonementService:AbonementService,private bussercice:BusService, private tostar:ToastrService) { }

  ngOnInit(): void {
    this.bussercice.getAllBus().subscribe(data => {
      this.bus = data;
    });
    this.Abonement ={
      idAb: null,
      dateD: null,
      dateF: null,
      nomEtu: null
     
    }
  }
  show(){
    this.tostar.success("ajout avec succes")
  }
  addAbonement(){
 
    this.abonementService.createAbonnement(this.Abonement,this.idBus).subscribe(
      (resp) => {
        console.log(resp);

        
      },
     
    );
    
  }

}



