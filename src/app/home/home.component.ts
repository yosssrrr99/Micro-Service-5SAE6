import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DonationService } from '../donation.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
  '../../assets/css/owl.css',
  '../../assets/css/templatemo-grad-school.css',
  '../../assets/css/lightbox.css',
  '../../assets/css/fontawesome.css'],
  animations: [
    trigger('contentToggle', [
      state('visible', style({
        height: '*',
        opacity: 1
      })),
      state('hidden', style({
        height: 0,
        opacity: 0
      })),
      transition('visible => hidden', [
        animate('0.3s')
      ]),
      transition('hidden => visible', [
        animate('0.3s')
      ])
    ])
  ]
})


export class HomeComponent implements OnInit {

  contentVisible = false;
 
  constructor() { }

  ngOnInit(): void {
   
  }
  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  

  toggleContent(event: Event) {
    event.preventDefault();
    this.contentVisible = !this.contentVisible;
  }

}





