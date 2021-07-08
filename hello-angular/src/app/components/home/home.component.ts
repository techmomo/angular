import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MPower } from '../MPower';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  messages:string[] = [];
  counter:number = 0;
  uName:string = 'User 1';
  customObj:any ='';

  numPower:any={};
  // get data send from parent component
  @Input() data:string = '';

  // send data to parent from child
  @Output() msgInfo:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

    console.log('App Component has send some info '+this.data);

    this.customObj = {
      id: 1,
      name: 'Custom User'
    };

    // create power object

    let mPow:MPower ={
      val: 10,
      pow: 3
    }
    this.numPower= mPow;

    this.messages =[
      'Hello',
      'How',
      'Welcome',
      'Hola'
    ];
  }

  clickMe(){
    this.msgInfo.emit('Message : Sent from Home Component');
    this.counter = this.counter + 1;
    console.log('I was clicked '+this.uName);
  }

  // get value from input type via OnInput Method
  getName(uu:Event){
    console.log((<HTMLInputElement>uu.target).value);
  }
  ngOnDestroy():void{

  }
}
