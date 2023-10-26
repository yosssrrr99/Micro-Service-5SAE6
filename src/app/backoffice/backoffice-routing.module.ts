import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DishComponent } from './dish/dish.component';
import { TablesComponent } from './Tables/tables.component';
import { OrderComponent } from './order/order.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { ChartBarComponent } from '../chart-bar/chart-bar.component';
import { EventsComponent } from './events/events.component';
import { LocationsComponent } from './locations/locations.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { BusComponent } from './bus/bus.component';
import { AbonementComponent } from './abonement/abonement.component';
import { RoomComponent } from './room/room.component';
import { ReservationRoomComponent } from './reservation-room/reservation-room.component';



const routes: Routes = [
  { path: 'dish', component: AdminLayoutComponent,children :[
    {path:'',component:DishComponent}
  ] },{ path: '', component: AdminLayoutComponent,children :[
    {path:'',component:DashboardComponent}
  ] },{ path: 'table', component: AdminLayoutComponent,children :[
    {path:'',component:TablesComponent}
  ] },{ path: 'order', component: AdminLayoutComponent,children :[
    {path:'',component:OrderComponent}
  ] },{ path: 'dash', component: AdminLayoutComponent,children :[
    {path:'',component:BarGraphComponent}
  ] },{ path: 'dashBar', component: AdminLayoutComponent,children :[
    {path:'',component:ChartBarComponent}
  ] },{ path: 'events', component: AdminLayoutComponent,children :[
    {path:'',component:EventsComponent}
  ] },{ path: 'locations', component: AdminLayoutComponent,children :[
    {path:'',component:LocationsComponent}
  ] },{ path: 'reservations', component: AdminLayoutComponent,children :[
    {path:'',component:ReservationsComponent}
  ] },{ path: 'bus', component: AdminLayoutComponent,children :[
    {path:'',component:BusComponent}
  ] },{ path: 'abonement', component: AdminLayoutComponent,children :[
    {path:'',component:AbonementComponent}
  ] },{ path: 'room', component: AdminLayoutComponent,children :[
    {path:'',component:RoomComponent}
  ] }
  ,{ path: 'reservationR', component: AdminLayoutComponent,children :[
    {path:'',component:ReservationRoomComponent}
  ] }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
