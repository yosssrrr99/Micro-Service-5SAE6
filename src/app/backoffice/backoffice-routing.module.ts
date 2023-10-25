import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DishComponent } from './dish/dish.component';
import { TablesComponent } from './Tables/tables.component';
import { OrderComponent } from './order/order.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { ChartBarComponent } from '../chart-bar/chart-bar.component';



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
  ] }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
