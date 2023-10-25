import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Donnations } from './donnation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

 
    private url = 'http://localhost:9090/Cool/dishs';
  
    constructor(private http: HttpClient) { }
    createDonnation(dish: Donnations): Observable<Object>{
      return this.http.post(this.url+'/add/donnation', dish);
    }
   
}
