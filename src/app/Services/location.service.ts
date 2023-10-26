import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locations } from '../Model/locations.model';

const baseUrl = 'http://localhost:8080/event';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Locations[]> { 
    return this.http.get<Locations[]>(baseUrl+'/getAllLocations');
  }
  AddLocation(location : Locations) : Observable<String>{
    return this.http.post<String>(baseUrl+'/saveLocation' , location);
  }
  deleteLocation(idSalle : number) : Observable<String>{
    return this.http.delete<String>(baseUrl+'/deleteLocation/'+idSalle );
  }
  updateLocation(idSalle : number , location : Locations) : Observable<String>{
    return this.http.put<String>(baseUrl+'/updateLocation/'+idSalle , location);
  }
}
