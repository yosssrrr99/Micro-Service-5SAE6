import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { OrderService } from '../order.service';
import { TableService } from '../table.service';
import { Dishs } from '../dishs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dish-front',
  templateUrl: './dish-front.component.html',
  styleUrls: ['./dish-front.component.css']
})
export class DishFrontComponent implements OnInit {

 


  
  title = 'DishDashboard';
  id:any;
  Dish:any;
  dishDetails:any;
  dishToUpdate:any;
  NbCalorieParPlat:any;
  idTable:any;
  idDish:any;
  Order:any;
  tables:any;

  
  constructor(private dishService: DishService,private orderService:OrderService,private tableService:TableService,private tostar:ToastrService) {
    
    this.getDishDetails();
    
  }
  
  ngOnInit(): void {
    this.tableService.getAlLTabDispo().subscribe(data => {
      this.tables = data;
    });
    this.Dish = {
      idDish: null,
      nameDish: null,
      typeDish: null,
      description:null,
      price:null
     }
     this.Order = {

      dateOrder: null,
      nbPlace: null,
      status:null

     }
        
   this.dishToUpdate = {
      idO:null,
      name:null,
      type:null,
      description:null,
      price:null
    }
  }


  getDishDetails() {
    this.dishService.getAllDish().subscribe(
      (resp) => {
        console.log(resp);
        this.dishDetails = resp;
        this.dishDetails.forEach((dish:Dishs) => {
          this.getNbCal(dish.idDish); // Pass the dish ID as a parameter to getNbCal
        });
      
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getNbCal(iddish: number) {
    this.dishService.getNbCalorieParPlat(iddish).subscribe(
      (calories:number) => {
        // Update the corresponding dish object with the calorie count
        const dish = this.dishDetails.find((dish:Dishs) => dish.idDish=== iddish);
        if (dish) {
          dish.NbCalorieParPlat = calories; // Assuming the property name is "NbCalorieParPlat"
        }
      },
      (err:any) => {
        console.log(err);
      }
    );
  }
  addOrder(){
 
    this.orderService.createEmployee(this.Order,this.idTable,this.idDish).subscribe(
      (resp) => {
        console.log(resp);
        
       if(resp == true){
        this.tostar.info("Resrve Success")
       }
        // Add NbCalorieParPlat to each dish object
     
        else{
          this.tostar.error("Saturated table reserved in another table")
        }

        
      },
     
    );
    
  }
  RecupereDish(id:number){
    
    this.idDish=id;
    
  }
 

 


}
