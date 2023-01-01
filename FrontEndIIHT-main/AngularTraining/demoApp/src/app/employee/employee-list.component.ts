import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  emps:Employee[]=[];
  constructor(private service:EmployeeService){}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');

    this.emps=this.service.getEmployees();
  }


}
