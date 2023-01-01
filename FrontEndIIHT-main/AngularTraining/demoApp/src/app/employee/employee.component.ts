import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export class country{

  id:string='';
  name:string='';
  constructor(id:string,name:string){

    this.id=id;
    this.name=name;
  }
}
export class Emp{

  id:number=0;
  firstname:string='';
  lastname:string='';
  country:string='';
     
}
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  @ViewChild('empForm',{})empForm!:NgForm;
  countries:country[]=[
   new country("1","India"),
   new country("2","america")
  ];



  reset(empForm:any){

    empForm.resetForm();
  }
  onSubmit(empForm:any){
    console.log(empForm.value)
    //return empForm.value;
  }

  changeCountry(empForm:any){

    this.empForm.controls['country'].setValue("1");
  }


}
