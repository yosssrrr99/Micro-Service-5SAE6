import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';
import { Orders } from '../order';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private route:ActivatedRoute, private orderService:OrderService) { }
  id:number=1;
  Order:any;
  order!:Orders;
  OrderDetails:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOrderById();
    this.Order = {
      idUser:null,
      dateOrder: null,
      nbPlace: null,
      status:null

     }
  }
  getOrderById(){
    this.orderService.getOrderByIdUser(this.order.idUser).subscribe(
      (data) => {
        this.OrderDetails = data;
      },
      (error) => {
        console.log('Error fetching order details:', error);
      }
    );
  }
  }



