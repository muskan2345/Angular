// import { Component } from '@angular/core';
// import { NgForm, NgModel } from '@angular/forms';
// import { Animal, AnimalService } from './animal';

// @Component({
//   selector: 'app-animal-list',
//   templateUrl: './animal-list.component.html',
//   styleUrls: ['./animal-list.component.css']
// })
// export class AnimalListComponent {
// newAnimal() {
// throw new Error('Method not implemented.');
// }
//    animals:Animal[]=[];
  

//   // setValue(){
//   //   this.matchId='';
//   // }
  
//   // toggleImage(){
//   //   this.showImage=!this.showImage;
//   // }

//   constructor(private service:AnimalService){
    
//   }
  
//   ngOnInit():void{
//     this.animals=this.service.getAnimal();
//   }

// //   list:any=[
// //     {id:'101',
// //       name:"Dog",
// //       briefDescription:"Most Loved Animal",
// //       imageUrl:"../../assets/download.jpeg"
// // },
// // {
// //   id:"102",
// //   name:"Lion",
// //   briefDescription:"Jungle King",
// //   imageUrl:"../../assets/Lion_waiting_in_Namibia.jpg"
// // },
// // {
// //   id:"103",
// //   name:"Elephant",
// //   briefDescription:"The only animal who can't jump",
// //   imageUrl:"../../assets/African-savanna-elephant.webp"
// // }
// //   ]


// //   filteredList:any[]=this.list;

  
// //   filter(){
// //     this.filteredList=[];
// //     for(let i=0;i<this.list.length;i++){
// //       if(this.list[i].id.includes(this.matchId)){
// //         this.filteredList.push(this.list[i]);
// //       }
// //     }
// //   }



   

// }
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AnimalService } from 'src/app/shared/animal.service';
import { Animal } from './animal';
import * as AnimalActions from '../state/animals/animal.actions';
import { Location } from '@angular/common';
//import {Store} from '@ngrx/store';
import {Store} from '@ngrx/store';
import { State } from '@ngrx/store'
import {select}  from '@ngrx/store';
import { getAnimals, getCurrentAnimal, getError } from '../state/animals/animal.selectors';

@Component({
  selector: 'animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalsListComponent implements OnInit ,OnDestroy {
  //[x: string]: any;
errorMessage:string='';
sub!:Subscription;
animal!:Animal;
animals:Animal[]=[];
pageTitle:string="Animal List "
filteredAnimals:Animal[]=[];
selectedAnimal!:Animal | null;
filterValue!:string;
href:string='';

animals$!:Observable<Animal[]>
selectedAnimal$!:Observable<any>;
dataReceived=this.animalService.getAnimals;

obsAnimal$!:Observable<Animal[]>;
errorMessage$!: Observable<string>;

@Output() OnAnimalSelection:EventEmitter<Animal>=new EventEmitter<Animal>();
  snackBar: any;
  store: any;
 // store: any;
  // store: any;
 // store: any;


 

  constructor(private animalService:AnimalService,
    private router:Router){ }


  ngOnInit(): void {
    this.href=this.router.url;
    console.log(this.href);
    //sub object is initialized
      //  this.sub =this.animalService.getAnimals().subscribe(
      //    (response: Animal[])=>{

      //    console.log(response);
      //    this.animals=response;
      //    this.filteredAnimals = this.animals;

      //  },
      //    (       err: string)=>{this.errorMessage=err;
      //   console.log(err);
      //  }
      //  );

      //  this.animalService.selectedAnimalChanges$.
      //  subscribe((currentAnimal: Animal | null)=>{this.selectedAnimal=currentAnimal;
      //  console.log(this.selectedAnimal);
     //  });
     this.animals$ = this.store.select(getAnimals);
    this.animals$.subscribe(resp=>this.filteredAnimals=resp);

    this.errorMessage$ = this.store.select(getError);

    this.store.dispatch(AnimalActions.loadAnimals());

    // Do NOT subscribe here because it uses an async pipe
    this.selectedAnimal$ = this.store.select(getCurrentAnimal);

     }

     ngOnDestroy(): void {
       this.sub.unsubscribe();
  }



   filterData(val:string){




    this.filteredAnimals=this.animals.filter((a)=>a.category===val);
  }


  onRatingClicked(msg:string):void{
    this.pageTitle='My Angular App ' +msg;
  }

 onSelect(a:Animal){
  this.OnAnimalSelection.emit(a);
 }

newAnimal():void{
 // console.log('in new animal');

  // this.animalService.changeSelectedAnimal(this.animalService.newAnimal());
  // console.log('back to newAnimal from service ');

  this.store.dispatch(AnimalActions.initializeCurrentAnimal());
  console.log('in new animal');
   this.router.navigate([this.href,'addAnimal']);
}
 animalSelected(animal:Animal):void{
  //this.animalService.changeSelectedAnimal(animal);
  this.store.dispatch(AnimalActions.setCurrentAnimal({currentAnimalId:animal.id}));
 }
  getAnimalById(id:number):Animal{
    this.animalService.getAnimalById(id).subscribe((resp: Animal)=>this.animal=resp);
    return this.animal;
  }


  // deleteAnimal(id:number){
  //   this.animalService.deleteAnimal(id).subscribe(()=>{
  //     let fIndex=this.animals.findIndex((item)=>item.id==id);
  //     if(fIndex>-1){
  //       this.animals.splice(fIndex,-1);
  //       this.snackBar.open(
  //         `Product with id ${id} is deleted successfully`,
  //         close,{
  //           duration:2000,
  //         }
  //       )
  //     }
  //   });
  //   return this.animal;
  // }

  updateAnimal(animal:Animal){
    this.animalService.updateAnimal(animal).subscribe(()=>{


    })
  }
}
