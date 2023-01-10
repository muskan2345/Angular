import { HttpEvent, HttpEventType } from "@angular/common/http";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { inject, TestBed } from "@angular/core/testing";

import { of } from "rxjs";
import { Category, Animal } from "src/app/Animals/animal";
import { AnimalService } from "./animal.service"
/*class FakeApiService {
    // Implement the methods you want to overload here
    getProducts() {
      return of({ items: [[
        {
            "id":111,
            "name":"apples",
            "category":Category.fruits,
            "price":180,
            "image":"../../assets/images/apple.jpg",
            "rating":3.5,
            "qty":0
           },
          {
            "id":112,
            "name":"tomato",
            "category":Category.vegetables,
            "price":340,
            "image":"../../assets/images/tomato.jpg",
            "rating":2,
            "qty":0
        }]
    ] }); // * mocks the return of the real method
    }
  }*/
describe('AnimalService', () => {
    let service: AnimalService;
    let httpMock: HttpTestingController;
    let  items:any[]=[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AnimalService],
        });
        service = TestBed.get(AnimalService);

    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    })
    it('should getAllAnimal',
        inject([HttpTestingController, AnimalService],
            (httpMock: HttpTestingController, service: AnimalService) => {


                const items = [

                    {

                        "id": 3,

                        "name": "Dog",

                        "briefDescription": "Kind",

                        "image": "../../assets/download.jpg",

                        "physicalStrength": 1,

                        "color": "White/Black",

                        "category": Category.domestic

                    },
                    {

                        


                        "id": 3,

                        "name": "Dog",

                        "briefDescription": "Kind",

                        "image": "../../assets/download.jpg",

                        "physicalStrength": 1,

                        "color": "White/Black",

                        "category": Category.domestic
                    }];


                service.getAnimals().subscribe(resp => expect(items).toEqual(resp));


                const mockReq = httpMock.expectOne(service.url);

                expect(mockReq.cancelled).toBeFalsy();
                expect(mockReq.request.responseType).toEqual('json');
                mockReq.flush(items);

                httpMock.verify();
            }
        ));
//
    //using spyOn
    it('should get animal by id', () => {
        let response: Animal;


        let item = {

            

            "id": 3,

            "name": "Dog",

            "briefDescription": "Kind",

            "image": "../../assets/download.jpg",

            "physicalStrength": 1,

            "color": "White/Black",

            "category": Category.domestic

        };

        const fn = spyOn(service, 'getAnimalById').and.returnValue(of(item));

        service.getAnimalById(111).subscribe(res => { response = res; expect(response).toEqual(item); });

        expect(fn).toHaveBeenCalled();

    });
    // it('createAnimal() should post a animal and    return that new animal  as data',()=>{


    //     const  item :Animal {
    
    //         id: 3,

    //        name: "Dog",

    //         briefDescription: "Kind",

    //         image: "../../assets/download.jpg",

    //         physicalStrength: 1,

    //         color: "White/Black",

    //         "category": Category.domestic
    
    //      },
    
    
    //   const item2:Animal {
    //          id: 3,

    //       name: "Dog",

    //     briefDescription: "Kind",

    //        image: "../../assets/download.jpg",

    //     physicalStrength: 1,

    //       color: "White/Black",

    //     category: Category.domestic
    
           
    
    //      };
    //     items =[...items,item];
    //      service.createAnimal(item).subscribe(resp=>expect(resp).toEqual(item2) )
    //      expect(items.length).toEqual(2);
    
    //      const req = httpMock.expectOne(service.url);
    //      expect(req.request.method).toBe('POST');
    //      req.flush({item });
    
    //      });
    
         it('updateAnimal () should update  a animal and    return updated animal as data',()=>{
    
    
    
    
    
          let item2 ={
            "id": 5,

            "name": "Dog",

            "briefDescription": "Kind",

            "image": "../../assets/download.jpg",

            "physicalStrength": 1,

            "color": "White/Black",

            "category": Category.domestic
    
           
           };
    
           service.updateAnimal(item2).subscribe(resp=>expect(resp).toEqual(item2) )
    
    
           const req = httpMock.expectOne(`${service.url}/${item2.id}`);
           expect(req.request.method).toBe('PUT');
           req.flush({item2 });
    
           })
    
    
    

    

})