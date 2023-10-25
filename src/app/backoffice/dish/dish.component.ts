import { Component, OnInit } from '@angular/core';
import { DishService } from '../../dish.service';
import { NgForm } from '@angular/forms';
import { DishType } from 'src/app/DishType';


@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  


  title = 'DishDashboard';
  id:any;
  Dish:any;
  dishDetails:any;
  dishToUpdate:any;
  NbCalorieParPlat:any;
  
  constructor(private dishService: DishService) {
    this.getDishDetails();
    
  }
  typeDish!:DishType;
  
  ngOnInit(): void {
    this.Dish = {
      idDish: null,
      nameDish: null,
      typeDish: null,
      description:null,
      price:null
     }
     
   this.dishToUpdate = {
      idDish:null,
      name:null,
      type:null,
      description:null,
      price:null
    }
  }

  register(registerForm: NgForm) {
    this.dishService.createEmployee(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getDishDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getDishDetails() {
    this.dishService.getAllDish().subscribe(
      (resp) => {
        console.log(resp);
        this.dishDetails = resp;
        // Add NbCalorieParPlat to each dish object
   
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getDishById(idDish:number){
    this.dishService.getDishById(idDish).subscribe(
      (resp) => {
        console.log(resp);
        this.NbCalorieParPlat=resp;
        this.getDishDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteDish(idDish:number) {
    this.dishService.deleteDish(idDish).subscribe(
      (resp) => {
        console.log(resp);
        this.getDishDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(dish: any){
    
    this.dishToUpdate = dish;
    
  }
  

  updateDish(){
    this.dishService.updateDish(this.dishToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      
      },
      (err) => {
        console.log(err);
      }
    );
  }



}
