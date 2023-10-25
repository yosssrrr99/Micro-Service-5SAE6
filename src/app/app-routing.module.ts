import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { DishComponent } from './backoffice/dish/dish.component';
import { DishFrontComponent } from './dish-front/dish-front.component';
import { ForumComponent } from './forum/forum.component';
import { DonnateComponent } from './donnate/donnate.component';
import { PanierComponent } from './panier/panier.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { CommComponent } from './comm/comm.component';

const routes: Routes = [   
 { path: '', component: HomeComponent },
{ path: 'dishs', component: DishComponent },
{ path: 'd', component: DashboardComponent },
{ path: 'dishFront', component: DishFrontComponent },
{ path: 'forum', component: ForumComponent },
{ path: 'comment/:id', component: CommentaireComponent },
{ path: 'comm', component: CommComponent },
{ path: 'donnate', component: DonnateComponent },
{ path: 'panier', component: PanierComponent },
{ path: 'admin', loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
