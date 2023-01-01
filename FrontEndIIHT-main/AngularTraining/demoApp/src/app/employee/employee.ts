import { Injectable } from "@angular/core";

export class Employee{


   

    id!:number;
    name!:string;
    dept!:string;
    sal!:number;

    constructor( id:number, name:string, dept:string,sal:number){

        this.id=id;
        this.name=name;
        this.dept=dept;
        this.sal=sal;
    }
}

@Injectable({
   providedIn:'root'
})
export class EmployeeService{

    public getEmployees(){
       let emps:Employee[];
       emps=[

        new Employee(1,'muskan','fdf',33232),
        
        new Employee(1,'muskan','fdf',33232)
       ]

       return emps;
    }

    getEmployeeById(id:number){
        let emps:Employee[]=this.getEmployees();
       // return EmployeeService.find(e=>e.id==id);
       return emps.find(e=>e.id==id);
    }
    
}