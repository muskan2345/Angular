import { Component, ViewChild } from '@angular/core';
import { MaxLengthValidator, NgForm } from '@angular/forms';

export class trustee{

    id!: number;
    name!:string;
    gender!: string; 
    country!: string; 
    pass!: string; 
    Isudate!: string;
    dep!: number;

    // constructor(id:number,name:string,gender :string,countryOfResidence:string,passport:string,issueDate:string,noOfDependents:number){

    //   this.id=id;
    //   this.name=name;
    //   this.gender=gender;
    //   this.countryOfResidence=countryOfResidence;
    //   this.passport=passport;
    //   this.issuanceDate=issueDate;
    //   this.noOfDependents=noOfDependents;

    // }
}
export class country{

  id:string='';
  name:string='';
  constructor(id:string,name:string){

    this.id=id;
    this.name=name;
  }


}
@Component({
  selector: 'app-trustee',
  templateUrl: './trustee.component.html',
  styleUrls: ['./trustee.component.css']
})
export class TrusteeComponent {
  @ViewChild('trusteeForm',{})trusteeForm!:NgForm;
  // countries:country[]=[
  //   new country("1","India"),
  //  new country("2","america")
  // ]

     trustee!:trustee

  countries:country[]=[

    new country("1","India"),

    new country("2","US"),

    new country("3","korea"),

    new country("4","Africa")

  ];

  ngOninit():void{

    this.trustee={

      id:1,
      name:"muskan",
      gender:'male',
      country:'India',
      pass:'defewesfdf',
      Isudate:'2022-12-12',
      dep:1



    };

    setTimeout(()=>{

      this.trusteeForm.setValue(this.trustee);
    })
  }



  onSubmit(trusteeForm:any){

    console.log(trusteeForm.value);
  }

  changeCountry(){

    this.trusteeForm.controls['country'].setValue("1");
  }

  reset(trustee:any){
     
    trustee.resetForm();
  }

}
