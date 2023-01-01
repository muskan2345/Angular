import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges{
  @Input() rating:number=0;
          cropWidth:number=75;

          @Output() ratingClicked:EventEmitter<string> =new EventEmitter<string>();
          // @Output() outputEvent:EventEmitter<string>=new EventEmitter<string>();

  ngOnInit(): void {
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cropWidth=this.rating*75/5;
  }

  onClick(){
    let msg =  document.querySelector('#h1')?.textContent ?? 'hello';
    this.ratingClicked.emit(`rating is ${this.rating}`);
  }
  // onClick():void{
  //   let msg =  document.querySelector('#h1')?.textContent ?? 'hello';
  //    this.ratingClicked.emit(msg);
  //  }



  

}
