import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dishs } from './dishs';


@Injectable({
  providedIn: 'root'
})
export class DishService {
  private url = 'http://localhost:9090/Cool/dishs';

  constructor(private http: HttpClient) { }

  getAllDish(): Observable<Dishs[]>{
    return this.http.get<Dishs[]>(this.url+'/getAll');
  }

  createEmployee(dish: Dishs): Observable<Object>{
    return this.http.post(this.url+'/add', dish);
  }

  getDishById(id: number): Observable<Dishs>{
    return this.http.get<Dishs>(this.url+'/getNbCalorie/'+id);
  }

  updateDish(dishs: any){
   
    return this.http.put(this.url+'/update/',dishs);
  }


  deleteDish(id: number): Observable<Object>{
    return this.http.delete(this.url+'/delete/'+id);
  }

  getBarGraphData() {
    this.http.get<any>(this.url+'/displayBarGraph');
  }
  getPieChartData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:9090/Cool/pie-chart');
  }
  getMenu1(): any{
    return this.http.get<any[]>(this.url+'/countMenu1');
  }
  getMenu2():any{
    return this.http.get<any[]>(this.url+'/countMenu2');
  }
  getNbCalorieParPlat(id:number):any{
    return this.http.get<any[]>(this.url+'/getNbCalorie/'+id);
  }

 
}
