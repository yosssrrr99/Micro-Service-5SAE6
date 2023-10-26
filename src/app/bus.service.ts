import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './Model/bus';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private url = 'http://localhost:8085/Transport/App';

  constructor(private http: HttpClient) { }

  getAllBus(): Observable<Bus[]>{
    return this.http.get<Bus[]>(this.url+'/AfficherB');
  }

  createBus(bus: Bus): Observable<Object>{
    return this.http.post(this.url+'/addB', bus);
  }

 
  updateBus(id:number,bus: any){
   
    return this.http.put(this.url+'/UpdateB/'+id,bus);
  }


  deleteBus(id: number): Observable<Object>{
    return this.http.delete(this.url+'/DeleteB/'+id);
  }
}

