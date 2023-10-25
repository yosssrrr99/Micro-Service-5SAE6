import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DonationService } from '../donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  constructor(private donnatipnService:DonationService ) { }

  ngOnInit(): void {
  }
 
  

}
