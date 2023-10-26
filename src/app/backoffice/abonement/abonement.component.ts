import { Component, OnInit } from '@angular/core';
import { AbonementService } from 'src/app/abonement.service';

@Component({
  selector: 'app-abonement',
  templateUrl: './abonement.component.html',
  styleUrls: ['./abonement.component.css']
})
export class AbonementComponent implements OnInit {

  

  title = 'AbonnementDashboard'
  id:any;
  Abonnement:any;
  abnToUpdate:any ={};
  abnDetails:any;
  
 

  constructor(private abnService:AbonementService) { 
    this.getAbonnementDetails();
  }

  ngOnInit(): void {
    this.Abonnement = {
      idAb: null,
      nomEtu: null,
      dateD: null,
      dateF: null
     
     }
     
   this.abnToUpdate = {
      idAb: null,
      nomEtu: null,
      dateD: null,
      dateF: null
    }
  }

 

  getAbonnementDetails() {
    this.abnService.getAllAbonnement().subscribe(
      (resp: any) => {
        console.log(resp);
        this.abnDetails = resp;
        
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  

  deleteAbn(id:number) {
    this.abnService.deleteAbonnement(id).subscribe(
      (resp) => {
        console.log(resp);
        this.getAbonnementDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(abn: any){
    
    this.abnToUpdate = abn;
    
  }

  updateAbn(){
    this.abnService.updateAbonnement(this.abnToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
    }

}

