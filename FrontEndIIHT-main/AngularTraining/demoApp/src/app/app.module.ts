import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PentHouseComponent2 } from './pent-house/pent-house.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlagListComponent } from './flats/flag-list.component';
import { AnimalsListComponent } from './Animals/animal-list.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
//import { ProductComponent } from './Product/product.component';
import { StarComponent } from './star/star.component';
//import { ShoppingCartComponent } from './shoppingCart/shopping-cart.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventBootComponent } from './event-bootcamp/event-boot.component';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DBServie } from './dataBaseService';
//import { ProductAddComponent } from './Product/product-add.component';
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
import { AnimalAddComponent } from './Animals/animal-add.component';
import { CardsComponent } from './cards/cards.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effect';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material.module';
import { MatDatepickerModule } from 
    '@angular/material/datepicker';
    import { MatFormFieldModule } from 
   '@angular/material/form-field';
import { FormComponent } from './form/form.component';
//import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { Store} from '@ngrx/store';
import { ProductListComponent } from './products/product-list.component';
import { ProductAddComponent } from './products/product-add.component';

//import { MatDatepickerModule } from './material-module/material.module';
//import { ProductComponent } from './product/product.component';
//import { ProductListComponent } from './product/product-list.component';



// const appRoutes:Routes=[

//   {}

// ];


@NgModule({
  declarations:[
    AppComponent,
    PentHouseComponent2,
    WelcomeComponent,
    FlagListComponent,
   AnimalsListComponent,
   //ProductComponent,
   StarComponent,
   //ShoppingCartComponent,
      NavbarComponent,
    EventBootComponent,
   // ProductAddComponent,
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
    SuggestionsComponent,
    GetValidatorDirective,
    AnimalAddComponent,
   CardsComponent,
   FormComponent,
   ProductListComponent,
   ProductAddComponent,
    
   // ProductComponent,
    //ProductListComponent,
    //TodoPageRoutingModule
   

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    StoreModule.forRoot({}),
    HttpClientInMemoryWebApiModule.forRoot(DBServie),
    EffectsModule.forRoot(AppEffects),
    StoreModule.forRoot({}),
    //StoreModule.provideStore(reducer, initialState),
    BrowserAnimationsModule,
    MaterialModule,
    // StoreDevtoolsModule.instrument(),
    
   // MatDatepickerModule 
   // MatDatepickerModule
  ],
  providers: [ MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
