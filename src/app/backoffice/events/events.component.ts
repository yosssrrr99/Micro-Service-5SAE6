import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/Model/events.model';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  idEvent : number = 0;
  nom : string ="";
  duration : string ="";
  date : any ;
  description : string ="";
  capacity :  number = 0;
  events : Events[]=[];
  eventsOld : Events[]=[];

  search : string = "";

  onKeyUp(){
    if(this.search ===""){
      this.events = this.eventsOld
    }else {
      this.events = this.events.filter((event)=> event.nom?.includes(this.search))
    }
    
  }

  constructor(private EventServices : EventService) { 
    this.EventServices.getAll().subscribe(data=> {
      this.events = data
      this.eventsOld = this.events
    })
   }


   AddEvent(){
  let event : Events = new Events();
  event.idEvent = this.idEvent+"";
    event.nom = this?.nom ;
    event.duration = parseInt(this?.duration+"") ;
    event.date = new Date (this?.date+"");
    event.description = this?.description ;
    event.capacity = this.capacity
    console.log(event,"alooo")
if (this.idEvent != 0){
  this.updateEvent(event)
}else{
  this.EventServices.AddEvent(event).subscribe(data=>{
   this.EventServices.getAll().subscribe(data=> {
    this.events = data
    this.refresh()
  })
 })
}
} 
  deleteEvent(idEvent:any){
    this.EventServices.deleteEvent(parseInt(idEvent)).subscribe(data =>{
      this.EventServices.getAll().subscribe(data=>{
        this.events=data
      })
    })

  }

  refresh(): void {
    window.location.reload();
}

  updateEvent(events:any){
    this.EventServices.updateEvent(events).subscribe(data=>{
      this.EventServices.getAll().subscribe(data=>{
        this.events=data
      })
    })
  }
  
  ngOnInit(): void {
  }

  

  edit(Event: any){

    console.log(Event)
    this.idEvent = Event.idEvent
    this.nom = Event.nom
    this.duration = Event.duration
    this.idEvent = parseInt(Event.idEvent)
    this.date = new Date (Event.date+"");
    this.description = Event.description ;
    this.capacity = Event.capacity
  }

  updateLocation(event:any){
    this.EventServices.updateEvent(event).subscribe(
      (resp) => {
        this.EventServices.getAll().subscribe(data=>{
          this.events=data
          this.idEvent=0
        })
      },
      (err) => {
        console.log(err);
      }
    );

}

  
}
