import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent2 } from './pent-house/pent-house.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlagListComponent } from './flats/flag-list.component';
import { AnimalListComponent } from './Animals/animal-list.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './Product/product.component';
import { StarComponent } from './star/star.component';
import { ShoppingCartComponent } from './shoppingCart/shopping-cart.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventBootComponent } from './event-bootcamp/event-boot.component';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DBServie } from './shared/dataBaseService';
import { ProductAddComponent } from './Product/product-add.component';
import { RepeatDataPipe } from './pipe/repeat.pipe';
import { EmployeeComponent } from './employee/employee.component';
import { GetValidatorDirective } from './employee/get-validator.directive';
import { TrusteeComponent } from './trustee/trustee.component';
import { StudentComponent } from './student/student.component';
import { BookComponent } from './book/book.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail.component';
import { AnimalDetailComponent } from './Animals/animal-detail.component';
import { SuggestionsComponent } from './employee/suggestions.component';



const appRoutes:Routes=[

  {}

];


@NgModule({
  declarations:[
    AppComponent,
    PentHouseComponent2,
    WelcomeComponent,
    FlagListComponent,
   AnimalListComponent,
   ProductComponent,
   StarComponent,
   ShoppingCartComponent,
      NavbarComponent,
    EventBootComponent,
    ProductAddComponent,
    RepeatDataPipe,
    EmployeeComponent,
    GetValidatorDirective,
    TrusteeComponent,
    StudentComponent,
    BookComponent,
    HomeComponent,
    AboutUsComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    AnimalDetailComponent,
    SuggestionsComponent
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    HttpClientInMemoryWebApiModule.forRoot(DBServie),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
