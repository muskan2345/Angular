import { Component, NgModule, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import {MatDatepickerModule} from '@angular/material';
//import { MatDatepickerModule, MatNativeDateModule } from './material-module/material.module';
// import { MatDatepickerModule } from 
//     '@angular/material/datepicker';
// import { MaterialModule } from '../material-module/material.module';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  
})

// @NgModule({
  
//   imports: [MatDatepickerModule,MaterialModule]
  
// })
export class BookComponent implements OnInit{
  bookForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  
    //step 1 :you have to create form model
    this.bookForm = this.formBuilder.group({


      id: ['23', [Validators.required, Validators.minLength(1)]],
      title: ['muskan', [Validators.required, Validators.minLength(3)]],
      date: ['2022-09-09', [Validators.required]],

      author: this.formBuilder.group({

        name: ['arna', [Validators.required]],
        email: ['arna@gmail.com', [Validators.required, Validators.email]]
      }),
        //country:['',[Validators.required]]
        publisher:this.formBuilder.array([])
     
    })
  }


  

  publisher():FormArray{

    return this.bookForm.get('publisher') as FormArray;

  }

  newPublisher():FormGroup{

    return this.formBuilder.group({

       co_name:'',

       co_id:'',

    })

  }



  addPublisher(){

    this.publisher().push(this.newPublisher());

  }

  removePublisher(publisherIndex:number){

    this.publisher().removeAt(publisherIndex);

  }

  get id() {
    return this.bookForm.get("id");
  }

  get title() {
    return this.bookForm.get("title");
  }

  get date() {
    return this.bookForm.get("date");

  }


  get name() {
    return this.bookForm.get("author")?.get("name");

  }

  get email() {
    return this.bookForm.get("author")?.get("email");
  }

  onSubmit() {
    console.log(this.bookForm.value);
  }
}




