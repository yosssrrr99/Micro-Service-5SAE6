import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sujet } from './sujet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SujetService {
  private url = 'http://localhost:9001/sujet';

  constructor(private http: HttpClient) { }
  getAllSujet(): Observable<Sujet[]>{
    return this.http.get<Sujet[]>(this.url);
  }
 

  createSujet(sujet:Sujet): Observable<Object>{
    return this.http.post(this.url, sujet);
  }

  getSujetById(id: number): Observable<Sujet>{
    return this.http.get<Sujet>(this.url+id);
  }

  updateSujet(id: string, sujet: any){
  
    return this.http.put(this.url+'/'+id, sujet);
  }


  deleteDish(id: number): Observable<Object>{
    return this.http.delete(this.url+'/'+id);
  }
}
