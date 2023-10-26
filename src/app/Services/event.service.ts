import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../Model/events.model';

const baseUrl = 'http://localhost:8080/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }
    getAll(): Observable<Events[]> { 
      return this.http.get<Events[]>(baseUrl+'/getAllEvents');
    }
  
    AddEvent(event : Events) : Observable<String>{
      return this.http.post<String>(baseUrl+'/addEvent' , event);
    }
    deleteEvent(idEvent : number) : Observable<String>{
      return this.http.delete<String>(baseUrl+'/deleteEvent/'+idEvent );
    }
  
    updateEvent(event : Events) : Observable<String>{
      return this.http.put<String>(baseUrl+'/updateEvent/'+event.idEvent , event);
    
  }
}
