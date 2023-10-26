import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { WhyusComponent } from './whyus/whyus.component';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';
import { DishComponent } from './backoffice/dish/dish.component';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from './backoffice/Tables/tables.component';
import { OrderComponent } from './backoffice/order/order.component';
import { DonationComponent } from './donation/donation.component';
import { DishFrontComponent } from './dish-front/dish-front.component';
import { ForumComponent } from './forum/forum.component';
import { DonnateComponent } from './donnate/donnate.component';
import { ReserveComponent } from './reserve/reserve.component';
import { BarGraphComponent } from './backoffice/bar-graph/bar-graph.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PanierComponent } from './panier/panier.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { CommComponent } from './comm/comm.component';
import { DisplayEventComponent } from './display-event/display-event.component';
import { AbonementFrontComponent } from './abonement-front/abonement-front.component';
import { ReservationRoomFrontComponent } from './reservation-room-front/reservation-room-front.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    WhyusComponent,
    CourseComponent,
    ContactComponent,
    FooterComponent,
    DishComponent,
    TablesComponent,
    OrderComponent,
    DonationComponent,
    DishFrontComponent,
    ForumComponent,
    DonnateComponent,
    ReserveComponent,
    BarGraphComponent,
    PanierComponent,
    CommentaireComponent,
    CommComponent,
    DisplayEventComponent,
    AbonementFrontComponent,
    ReservationRoomFrontComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     FormsModule,
     HttpClientModule,
     NgApexchartsModule,
     ToastrModule.forRoot()
     
     
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
