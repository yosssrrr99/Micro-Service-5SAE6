import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from './Model/room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

   
  private url = 'http://localhost:8081/room';

  constructor(private http: HttpClient) { }

  getAllRoom(): Observable<Room[]>{
    return this.http.get<Room[]>(this.url+'/getAll');
  }

  createRoom(room: Room): Observable<Object>{
    return this.http.post(this.url+'/add', room);
  }

 
  updateRoom(room: any){
   
    return this.http.put(this.url+'/update/',room);
  }


  deleteRoom(id: number): Observable<Object>{
    return this.http.delete(this.url+'/delete/'+id);
  }
}

