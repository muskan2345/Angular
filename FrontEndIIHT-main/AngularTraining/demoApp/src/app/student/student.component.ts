import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// export class Program{

//     ProgramName:string;


// }
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  title='Student Form';
   studentForm:FormGroup;

  
  constructor(private FormBuilder:FormBuilder){
       this.studentForm=this.FormBuilder.group({
         ///first step
           id:['1',[Validators.required,Validators.max(100)]],
           name:['Amit',[Validators.required,Validators.minLength(10)]],
           email:['fdnkwn@gmail.com',[Validators.required,Validators.email]],
           gender:['Male',[Validators.required]],
          // program:Program[],
           address:this.FormBuilder.group({

            city:['Kanpur',[Validators.required]],
            state:['UP',[Validators.required]],
            country:['India',[Validators.required]],

           // programs:this.FormBuilder.array([]);

           })


       })

      //   Second way to create form

      // this.studentForm=new FormGroup({

      //   id:new FormControl('',Validators.required,Validators.minLength(12)),
      //   name:new FormControl('',Validators.required),
      //   email:new FormControl(''),
      //   gender:new FormControl(''),
      

      // })

  }


  
  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.studentForm.value);
  }
 
  get id(){
    return this.studentForm.get("id");
  }

  get name(){
    return this.studentForm.get("name");
  }

  get gender(){
    return this.studentForm.get("gender")
  }

  get city(){

    return this.studentForm.get("address")?.get("city");
  }
  get state(){

    return this.studentForm.get("address")?.get("state");
  }
  get country(){

    return this.studentForm.get("address")?.get("country");
  }

  

}
