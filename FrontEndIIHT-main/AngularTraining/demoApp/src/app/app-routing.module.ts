import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AnimalDetailComponent } from './Animals/animal-detail.component';
import {  AnimalsListComponent } from './Animals/animal-list.component';
import { BookComponent } from './book/book.component';
import { EmployeeDetailComponent } from './employee/employee-detail.component';
import { EmployeeListComponent } from './employee/employee-list.component';
import { HomeComponent } from './home/home.component';
//import { ProductAddComponent } from './Product/product-add.component';
//import { ProductComponent } from './Product/product.component';
import { StudentComponent } from './student/student.component';
import {AnimalAddComponent} from './Animals/animal-add.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
const routes: Routes = [
{path:'',component:HomeComponent},  
{path:'about-us',component:AboutUsComponent},  
{path:'book',component:BookComponent},  
{path:'student' ,component:StudentComponent},
//  {path:'**',component:PageNotFoundComponent},
 { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
 {path:'emps' ,component:EmployeeListComponent,
children:[
  {path:'detail/:id',component:EmployeeDetailComponent},
  //{path:'suggestion',component:EmployeeDetailComponent}
]},
// {path:'emps/:id',component:EmployeeDetailComponent},
  //   {path:'animal',component:AnimalListComponent,
  
  // children:[
  //   {path:'animal/:id',component:AnimalDetailComponent}
  // ]},
//   {path:'product',component :ProductComponent,
//   children:[
//     {path:'add-product',component:ProductAddComponent}
//   ]

// },

{
  path:'animals',
  component:AnimalsListComponent,
  //canActivate:const [AuthGuard],
  children:[{path:'addAnimal',component:AnimalAddComponent}]
}
    
     // {path:'animal/:id',component:AnimalDetailComponent},
      //{path:'suggestion',component:EmployeeDetailComponent}

  

 //{path:'animal/:id',component:AnimalDetailComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
