import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-donnate',
  templateUrl: './donnate.component.html',
  styleUrls: ['./donnate.component.css']
})
export class DonnateComponent implements OnInit {

  Donnation:any;
  constructor(private donationService:DonationService,private tostar:ToastrService) { }

  ngOnInit(): void {
    this.Donnation ={
      firstName:null,
      lastName:null,
      email:null
    }
  }
  show(){
    this.tostar.success("ajout avec succes")
  }
  register(registerForm: NgForm) {
    this.donationService.createDonnation(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        this.tostar.success("Donation successfully added.")
        registerForm.reset();
     
      },
      (err) => {
        console.log(err);
        this.tostar.error("Something went wrong please try again")
      }
    );

}

}
