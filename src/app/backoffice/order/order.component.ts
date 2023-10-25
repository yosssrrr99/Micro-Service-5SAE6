import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DishService } from 'src/app/dish.service';
import { OrderService } from 'src/app/order.service';
import { TableService } from 'src/app/table.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
 
  title = 'DishDashboard';
  id:any;
  Order:any;
  orderDetails:any;
  orderToUpdate:any;
  idTable:any;
  idDish:any;
  tables:any;
  dishs:any;
  
  
  constructor(private orderService: OrderService,private tableService:TableService,private dishService:DishService) {
    this.getOrderDetails();
  }
  
  ngOnInit(): void {
    this.tableService.getAllDish().subscribe(data => {
      this.tables = data;
    });
    this.dishService.getAllDish().subscribe(data => {
      this.dishs = data;
    });

   
    
    this.Order = {

      dateOrder: null,
      nbPlace: null,
      status:null

     }
          
   this.orderToUpdate = {
    idOrder:null,
    status:null,
    nbPlace:null,
    idTable:null,
    idDish:null
  }
   
     
  
  }

  addOrder(){
 
    this.orderService.createEmployee(this.Order,this.idTable,this.idDish).subscribe(()=> this.getOrderDetails());
  }
 
  getOrderDetails() {
    this.orderService.getAllDish().subscribe(
      (resp) => {
        console.log(resp);
        this.orderDetails = resp;
        // Add NbCalorieParPlat to each dish object
   
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteOrder(idOrder:number) {
    this.orderService.deleteDish(idOrder).subscribe(
      (resp) => {
        console.log(resp);
        this.getOrderDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(order: any){
    
    this.orderToUpdate = order;
    
  }
  

  updateDish(){
    this.orderService.updateOrder(this.orderToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );

}
}
