import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalAddComponent } from './animal-add.component';

describe('AnimalAddComponent', () => {
  let component: AnimalAddComponent;
  let fixture: ComponentFixture<AnimalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should have  valid name',()=>{

    component.addAnimal.setValue({
      "name":"",
      "color":"",
      "briefDescription":"",
      "category":"",
      "image":""
    })
    expect(component.addAnimal.valid).toEqual(false);
  })
// theere are 5 formcontrolName still failed
  it("Test a form group Element count",()=>{

    const formElement=fixture.debugElement.nativeElement.querySelector('#addAnimal');
    const inputElement=formElement.querySelectorAll('input');
    expect(inputElement.length).toEqual(5);
  })




  
});
