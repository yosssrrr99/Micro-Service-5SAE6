import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/Model/events.model';
import { Locations } from 'src/app/Model/locations.model';
import { EventService } from 'src/app/Services/event.service';
import { LocationService } from 'src/app/Services/location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  idSalle:number =0;
  capacity : number =0;
  state :boolean = false;
  numSalle :number =0;
  idLocation : number = 0;

  location : any  

locations : Locations[]=[]
events : Events[]=[]
constructor(private locationService : LocationService ,private eventService : EventService   ) { 
  this.locationService.getAll().subscribe(data=>{
    this.locations = data
    console.log(this.locations)
  })

  this.eventService.getAll().subscribe(data=>{
    this.events = data
  })
}

onChange(event : any){
 this.state =  event.value==="true" ? true : false;
}

idEvent : any
onChangeEvent(event:any){
  this.idEvent= event.value
}

addLocation(){
  let location : Locations = new Locations();
  location.capacity= parseInt(this.capacity+"");
  location.state= this.state;
  location.numSalle= parseInt(this?.numSalle+"");
  location.idSalle= parseInt(this.idEvent)

  console.log(location)

  if (this.idLocation !== 0 ){
    this.updateLocation(location)
  }else {
   
  this.locationService.AddLocation(location).subscribe(data=>{
    this.locationService.getAll().subscribe(data=>{
      this.locations = data
    })
  })
  }
}

deleteEvent(idLocation:any){
  this.locationService.deleteLocation(parseInt(idLocation)).subscribe(data =>{
    this.locationService.getAll().subscribe(data=>{
      this.locations=data
    })
  })

}



edit(location: any){

  console.log(location)
  this.numSalle = location.numSalle
  this.capacity = location.capacity
  this.idLocation = parseInt(location.idSalle)
  
}


updateLocation(location:any){
  this.locationService.updateLocation(this.idLocation , location).subscribe(
    (resp) => {
      this.locationService.getAll().subscribe(data=>{
        this.locations=data
        this.idLocation=0
      })
    },
    (err) => {
      console.log(err);
    }
  );

}

ngOnInit(): void {
}

}
