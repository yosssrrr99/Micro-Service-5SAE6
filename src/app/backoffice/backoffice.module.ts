import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavComponent } from './nav/nav.component';
import { EventsComponent } from './events/events.component';
import { FormsModule, NgForm } from '@angular/forms';
import { LocationsComponent } from './locations/locations.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AbonementComponent } from './abonement/abonement.component';
import { BusComponent } from './bus/bus.component';
import { RoomComponent } from './room/room.component';
import { ReservationRoomComponent } from './reservation-room/reservation-room.component';




@NgModule({
  declarations: [
    AdminLayoutComponent,
    SideBarComponent,
    NavComponent,
    EventsComponent,
    LocationsComponent,
    ReservationsComponent,
    AbonementComponent,
    BusComponent,
    RoomComponent,
    ReservationRoomComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
