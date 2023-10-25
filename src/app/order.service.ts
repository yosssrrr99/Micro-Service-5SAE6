import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orders } from './order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private url = 'http://localhost:9090/Cool/orders';

  constructor(private http: HttpClient) { }

  getAllDish(): Observable<Orders[]>{
    return this.http.get<Orders[]>(this.url+'/getAll');
  }

  createEmployee(order: Orders,idTables:any,idDishs:any): Observable<boolean>{
    return this.http.post<boolean>(this.url+"/addor/"+idTables+"/"+idDishs, order);
  }

 

  updateOrder(orders: any){
   
    return this.http.put(this.url+'/update',orders);
  }


  deleteDish(id: number): Observable<Object>{
    return this.http.delete(this.url+'/delete/'+id);
  }
  getOrderByIdUser(id:number){
    return this.http.get(this.url+'/getOrder/'+id);

  }
}
