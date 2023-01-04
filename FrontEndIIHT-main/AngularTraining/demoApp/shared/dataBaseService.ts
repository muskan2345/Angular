import { Injectable } from "@angular/core";
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from "rxjs";
import { IEvent } from "../src/app/event-bootcamp/event";


@Injectable({
    providedIn:'root'
})
export class DBServie implements InMemoryDbService {

    createDb() {
        
//      const events: IEvent[]=[
//         {
//             "id":"101",
//             "name":"BootCamp",
//             "date":"2022-12-31",
//             "time":"16-30-00",
//             "price":399,
//             "imageUrl": "#",
//             "location": {
//                 "address":"Jai Jai Ram Muhalla",
//                 "city":"Kasganj",
//                 "country":"India"
//                 },
//             "session" :[
//                 {
//                     "id":"10101",
//                     "name":"Batch 1",
//                     "presenter":"Ms. Shalu Sharma",
//                     "duration":"90",
//                     "level":"Beginner",
//                     "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
//                 },{
//                     "id":"10102",
//                     "name":"Batch 1",
//                     "presenter":"Ms. Shalu Sharma",
//                     "duration":"90",
//                     "level":"Beginner",
//                     "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
//                 }
//             ]   
//         },
//         {
//             "id":"101",
//             "name":"BootCamp",
//             "date":"2022-12-31",
//             "time":"16-30-00",
//             "price":399,
//             "imageUrl": "#",
//             "location": {
//                 "address":"Jai Jai Ram Muhalla",
//                 "city":"Kasganj",
//                 "country":"India"
//                 },
//             "session" :[
//                 {
//                     "id":"10101",
//                     "name":"Batch 1",
//                     "presenter":"Ms. Shalu Sharma",
//                     "duration":"90",
//                     "level":"Beginner",
//                     "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
//                 }
//             ]   
//         },
//         {
//             "id":"101",
//             "name":"BootCamp",
//             "date":"2022-12-31",
//             "time":"16-30-00",
//             "price":399,
//             "imageUrl": "#",
//             "location": {
//                 "address":"Jai Jai Ram Muhalla",
//                 "city":"Kasganj",
//                 "country":"India"
//                 },
//             "session" :[
//                 {
//                     "id":"10101",
//                     "name":"Batch 1",
//                     "presenter":"Ms. Shalu Sharma",
//                     "duration":"90",
//                     "level":"Beginner",
//                     "voters":["Shashwat","Suyash","Harshvardhan","Atharv","Upagya","Tanisha","Madhav","Ojaswini","Arav"]
                    
//                 }
//             ]   
//         }
//        ]

//        return {events};

// let products=[
//     {
//       "id":1,
//       "name":"Gas Stove",
//       "price":"4000",
//       "image":"../../assets/gasStove.webp",
//       "rating":4,
//       "category":"Category.Kitchen"
//       }
//        ,{
//       "id":2,
//       "name":"Samsung Guru",
//       "price":"4000",
//       "image":"../../assets/samsungGuru.avif",
//       "rating":3,
//       "category":"Category.Electric"
//     }
//      ,{
//       "id":3,
//       "name":"Nokia 1100",
//       "price":"3200",
//       "image":"../../assets/nokia1100.jpeg",
//       "rating":2,
//       "category":"Category.Electric"
//     }
//     ,{
//       "id":4,
//       "name":"Mop",
//       "price":"1500",
//       "image":"../../assets/mop.webp",
//       "rating":5,
//       "category":"Category.Electric"
//     }
//      ,{
//       "id":5,
//       "name":"Chimney",
//       "price":"40000",
//       "image":"../../assets/chimney.jpeg",
//       "rating":3.5,
//       "category":"Category.Kitchen"
//     }
//   ]

// return {products};
       
    



//     let animals=[


//       {
//         id: 101,
//         name: "Dog",
//         briefDescription: "Most Loved Animal",
//         imageUrl: "../../assets/download.jpeg",
//         "physicalStrength":4,
  
//         "color":"Yelloish Orange",
    
//         "category":"Category.wild"
        
//     },

//     {
//         id: 102,
//         name: "Lion",
//         briefDescription: "Jungle King",
//         imageUrl: "../../assets/Lion_waiting_in_Namibia.jpg",
        
//     },
//     ]

//   return {animals};
   
// }

// }



let animals=[
  {
    "id":1,

    "name":"Lion",

    "briefDescription":"King of Jungle",

    "image":"",

    "physicalStrength":4,

    "color":"Yelloish Orange",

    "category":"wild"

    }

     ,{

    "id":2,

    "name":"Dog",

    "briefDescription":"King of weight",

    "image":"../../assets/download.jpeg",

    "physicalStrength":2,

    "color":"Brown",

    "category":"domestic"

  }

   ,{

    "id":3,

    "name":"Dog",

    "briefDescription":"Kind",

    "image":"../../assets/download.jpg",

    "physicalStrength":1,

    "color":"White/Black",

    "category":"domestic"
  }
]

return {animals};
}
}