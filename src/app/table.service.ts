import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tables } from './table';


@Injectable({
  providedIn: 'root'
})
export class TableService {
  private url = 'http://localhost:9090/Cool/tables';

  constructor(private http: HttpClient) { }
  
  getAllDish(): Observable<Tables[]>{
    return this.http.get<Tables[]>(this.url+'/getAll');
  }
  getAlLTabDispo(): Observable<Tables[]>{
    return this.http.get<Tables[]>(this.url+'/getTab');
  }

  createEmployee(table: Tables): Observable<Object>{
    return this.http.post(this.url+'/add', table);
  }

  getDishById(id: number): Observable<Tables>{
    return this.http.get<Tables>(this.url+'/getNbCalorie/'+id);
  }

  updateDish(tables: any){
   
    return this.http.put(this.url+'/update/',tables);
  }


  deleteDish(id: number): Observable<Object>{
    return this.http.delete(this.url+'/delete/'+id);
  }
}
