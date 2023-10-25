import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
