import { Component, OnInit } from '@angular/core';
import { TableService } from '../../table.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

 
  
  title = 'DishDashboard';
  id:any;
  Table:any;
  tableDetails:any;
  tableToUpdate:any;
 
  
  constructor(private tableService: TableService) {
    this.getTableDetails();
    
  }
  
  ngOnInit(): void {
    this.Table = {
      idTable: null,
      capacity: null,
      numTable: null,
      state:null
     }
     
   this.tableToUpdate = {
    id: null,
    capacity: null,
    num: null,
    state:null
    }
  }

  register(registerForm: NgForm) {
    this.tableService.createEmployee(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        registerForm.reset();
        this.getTableDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getTableDetails() {
    this.tableService.getAllDish().subscribe(
      (resp) => {
        console.log(resp);
        this.tableDetails = resp;
        // Add NbCalorieParPlat to each dish object
   
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getTableById(idTable:number){
    this.tableService.getDishById(idTable).subscribe(
      (resp) => {
        console.log(resp);
        
        this.getTableDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteDish(idTable:number) {
    this.tableService.deleteDish(idTable).subscribe(
      (resp) => {
        console.log(resp);
        this.getTableDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  edit(dish: any){
    
    this.tableToUpdate = dish;
    
  }
  

  updateDish(){
    this.tableService.updateDish(this.tableToUpdate).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
