// import { Injectable } from "@angular/core";
// import { BehaviorSubject, Observable, throwError } from "rxjs";

// export class Animal {

//     id: number = 0;
//     name: string = '';
//     briefDescription: string = '';


//     constructor(id: number, name: string, briefDescription: string, imageUrl: string) { this.id = id; this.name = name; this.briefDescription = briefDescription; this.imageUrl = imageUrl; }
//     imageUrl: string = '';

// }

// @Injectable({
//     providedIn: 'root'
// })
// export class AnimalService {

//     // public getAnimal() {

//     //     let animal: Animal[];

//     //     animal = [
//     //         {
//     //             id: 101,
//     //             name: "Dog",
//     //             briefDescription: "Most Loved Animal",
//     //             imageUrl: "../../assets/download.jpeg"
//     //         },

//     //         {
//     //             id: 102,
//     //             name: "Lion",
//     //             briefDescription: "Jungle King",
//     //             imageUrl: "../../assets/Lion_waiting_in_Namibia.jpg"
//     //         },

//     //         // new Animal(1,"Dog","Tommy","../../assets/download.jpeg"),
//     //         // new Animal(2,"Lion","sheru","../../assets/download.jpeg")
//     //     ]
//     //     return animal;
//     // }

//     // getAnimalById(id: number) {

//     //     let animal: Animal[] = this.getAnimal();
//     //     return animal.find(e => e.id == id);
//     // }


  


// }



import { Injectable } from "@angular/core";
export enum Category{
  wild='wild' , domestic='domestic'

}

export interface Animal{

  

  id:number;

  name:string;

  briefDescription:string;

  image:string;

  physicalStrength:number;

  color:string;
   
  category:Category;

  }
