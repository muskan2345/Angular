import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee, EmployeeService } from './employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit,OnDestroy {

  id:number=0;
  emp:Employee | undefined;
  sub!:Subscription;
  constructor(private activatedRoute:ActivatedRoute,private route:Router,private service:EmployeeService){


    
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
     this.sub= this.activatedRoute.paramMap.subscribe((params)=>
      {

        console.log(params);

        let idd=params.get("id");
        if(idd){
          this.id=+idd;
        }

        if(this.service.getEmployeeById(this.id)){
          this.emp=this.service.getEmployeeById(this.id);
        }
       
        
        
   } )

  }


  ngOnDestroy():void{

    this.sub.unsubscribe();
  }

  back():void{

    this.route.navigate(['emps'])
  }
}
