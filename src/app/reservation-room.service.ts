import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservationRoom } from './Model/reservationRoom';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationRoomService {
  private url = 'http://localhost:8081/resRoom';

  constructor(private http: HttpClient) {
      
   }

  getAllRes(): Observable<ReservationRoom[]>{
    return this.http.get<ReservationRoom[]>(this.url+'/getAll');
  }

  createRes(res: ReservationRoom, idRoom:any): Observable<Object>{
    return this.http.post( this.url+'/add/'+idRoom,res);
  }

 
  deleteRes(id: number): Observable<Object>{
    return this.http.delete(this.url+'/delete/'+id);
  }
}
