import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Animal, AnimalService } from './animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent {
   animals:Animal[]=[];
  

  // setValue(){
  //   this.matchId='';
  // }
  
  // toggleImage(){
  //   this.showImage=!this.showImage;
  // }

  constructor(private service:AnimalService){
    
  }
  
  ngOnInit():void{
    this.animals=this.service.getAnimal();
  }

//   list:any=[
//     {id:'101',
//       name:"Dog",
//       briefDescription:"Most Loved Animal",
//       imageUrl:"../../assets/download.jpeg"
// },
// {
//   id:"102",
//   name:"Lion",
//   briefDescription:"Jungle King",
//   imageUrl:"../../assets/Lion_waiting_in_Namibia.jpg"
// },
// {
//   id:"103",
//   name:"Elephant",
//   briefDescription:"The only animal who can't jump",
//   imageUrl:"../../assets/African-savanna-elephant.webp"
// }
//   ]


//   filteredList:any[]=this.list;

  
//   filter(){
//     this.filteredList=[];
//     for(let i=0;i<this.list.length;i++){
//       if(this.list[i].id.includes(this.matchId)){
//         this.filteredList.push(this.list[i]);
//       }
//     }
//   }

   

}
