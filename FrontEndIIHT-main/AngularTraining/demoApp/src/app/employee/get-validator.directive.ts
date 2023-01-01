import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[appGetValidator]',

  providers:[
   
      //provide:NG_VALIDATORS,useExisting:GetValidatorDirective,multi:}
  ]

})
export class GetValidatorDirective implements Validators {

  constructor() { }
  // validate(control:AbstractControl<any,any>):ValidationErrors{
  //   let num1:number=+control.value;

  //   if(isNaN(num1)){
  //     return {'gve':true,'requiredValue':10}
  //   }

  //   if(num1<=10){
  //     return {'gve':true,'requiredValue':10}
  //   }

    //return null;
  }


