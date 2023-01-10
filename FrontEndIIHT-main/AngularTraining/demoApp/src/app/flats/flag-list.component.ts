import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flag-list',
  templateUrl: './flag-list.component.html',
  styleUrls: ['./flag-list.component.css'],
  animations:[

    trigger('enlarge',[
  
  
  
      state('start',style({
  
       width:'50px' , height:'50px'
  
      })),
  
  
  
    state('end',style({
  
      height:'300px',width:'300px'
  
    })),
  
   
  
    transition('start=>end',[
  
      animate('1s 3s')
  
    ]),
  
    transition('end=>start',[
  
      animate('1s 3s')
  
  
  
    ]),
  
    ])]
  
  })

export class FlagListComponent {

  isHovering:boolean= false;

  flats:any[]=[{
    flatNumber:101,
    flatName:"Anand Vihar",
    aqreaInSqft:1000,
    numberOfZRooms:2,
    numberOfBalconies:1,
    monthlyRent:10000,
    imageUrl:"../../assets/flat.jpg"
  },
  {
    flatNumber:102,
    aqreaInSqft:1500,
    flatName:"Basant Vihar",
    numberOfZRooms:2,
    numberOfBalconies:1,
    monthlyRent:15000,
    imageUrl:"../../assets/flat1.jpg"
  },
  {
    flatNumber:103,
    aqreaInSqft:1500,
    flatName:"Barkha socienty",
    numberOfZRooms:2,
    numberOfBalconies:1,
    monthlyRent:15000,
    imageUrl:"../../assets/flat1.jpg"
  },

  {
    flatNumber:104,
    aqreaInSqft:1500,
    flatName:"Anand Vihar",
    numberOfZRooms:2,
    numberOfBalconies:1,
    monthlyRent:15000,
    imageUrl:"../../assets/flat1.jpg"
  }





]

applyAnimation($event: any){

  this.isHovering=!this.isHovering;



}



  

}
