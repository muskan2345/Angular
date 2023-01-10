import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({

      id: [null, [Validators.required]],

      name: [null, [Validators.required, Validators.minLength(10)]],

      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],

      dob: [null, [Validators.required]],

      address: [null],

      country: [null],

      gender: [null]

});

  }



  saveDetails(form: any) {

    alert('Submitted');

  }
}
