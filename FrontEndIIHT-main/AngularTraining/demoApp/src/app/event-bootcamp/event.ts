export interface IEvent{    
    id:string;
    name:string;
    date:string;
    time:string;
    price:number;
    imageUrl:string;

   location:{
    address:string;
    city:string;
    country:string;
}

   session:{
    id:string;
    name:string;                          
    presenter:string;
    duration:string;
    level:string;
    voters:string[];
}[];

    

    
}

// export interface Location{
//     address:string;
//     city:string;
//     country:string;
// }

// export interface Session{
//     id:string;
//     name:string;
//     presenter:string;
//     duration:string;
//     level:string;
//     voters:string[];
// }

