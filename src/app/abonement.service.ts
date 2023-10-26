import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Abonnement } from './Model/abonement';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonementService {

  private url = 'http://localhost:8085/Transport/App';

  constructor(private http: HttpClient) { }

  getAllAbonnement(): Observable<Abonnement[]>{
    return this.http.get<Abonnement[]>(this.url+'/AfficherA');
  }

  createAbonnement(abonnement: Abonnement,id:number): Observable<Object>{
    return this.http.post(this.url+'/addA/'+id, abonnement);
  }

 
  updateAbonnement(abonnement: any){
    return this.http.put(this.url+'/UpdateA/',abonnement);
  }


  deleteAbonnement(id: number): Observable<Object>{
    return this.http.delete(this.url+'/DeleteA/'+id);
  }
}
