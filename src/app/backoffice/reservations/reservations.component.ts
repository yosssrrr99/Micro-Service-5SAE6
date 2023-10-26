import { Component, OnInit } from '@angular/core';
import { Reservations } from 'src/app/Model/reservations.model';
import { ReservationService } from 'src/app/Services/reservation.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  idRes: number =0;
  dateRes: string ="" ;
  nbPerson: number =0;
  price: number=0;

  reservations : Reservations[]=[]
  constructor(private serviceRes:ReservationService) {
    this.serviceRes.getReservations().subscribe(data=>{
      this.reservations = data
    })
   
   }

   addReservation(){
    let reservation : Reservations = new Reservations();
    reservation.dateRes= new Date(this.dateRes);
    reservation.nbPerson= this.nbPerson;
    reservation.price= this.price;

    if (this.idRes !== 0 ){
      console.log(this.idRes,'iddd')
      this.updateReservation(reservation)
    }else{
    this.serviceRes.AddReservation(reservation).subscribe(data=>{
      this.serviceRes.getReservations().subscribe(data=>{
        this.reservations = data
        //this.refresh()
      })
    })}
   } 

   refresh(): void {
    window.location.reload();
}

  deleteReservation(idRes:any){
    this.serviceRes.deleteReservation(idRes).subscribe(data=>{
      this.serviceRes.getReservations().subscribe(data=>{
        this.reservations = data
      })
    })
  }

  edit(reservation: any){

    console.log(reservation)
    this.idRes = reservation.idRes
    this.dateRes = reservation.dateRes 
    this.nbPerson = reservation.nbPerson
    this.price = reservation.price
    
  }
  updateReservation(reservation:any){
    this.serviceRes.updateReservation(this.idRes , reservation).subscribe(
      (resp) => {
        this.serviceRes.getReservations().subscribe(data=>{
          this.reservations=data
        })
      },
      (err) => {
        console.log(err);
      }
    );

}

  ngOnInit(): void {
  }

}

