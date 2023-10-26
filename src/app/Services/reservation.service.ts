import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservations } from '../Model/reservations.model'
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/event';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }

getReservations(): Observable<Reservations[]> { 
  return this.http.get<Reservations[]>(baseUrl+'/getAllReservations');
} 
AddReservation(reservation : Reservations) : Observable<String>{
  return this.http.post<String>(baseUrl+'/addReservation' , reservation);
}
deleteReservation(idRes : number) : Observable<String>{
  return this.http.delete<String>(baseUrl+'/deleteReservation/'+idRes );
}
updateReservation(idRes : number , reservation : Reservations) : Observable<String>{
  return this.http.put<String>(baseUrl+'/updateReservation/'+idRes , reservation);

}
SenMailReservation() : Observable<String>{
  let reservation : any = {
    "attachment":"C:/Users/Eya Dh'a/Pictures/booking.png",
    "subject":"Reservation successfully created ",
    "msgBody":"Hello there , your reservation has been created successfully ! ",
    "recipient":"eya.dhamna@esprit.tn"
  }
  return this.http.post<String>(baseUrl+'/email/sendMailWithAttachment' , reservation);

}
}
