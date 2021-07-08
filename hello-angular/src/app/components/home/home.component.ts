import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { HelloService } from 'src/app/services/hello.service';
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

  constructor(private service:HelloService) { }

  ngOnInit(): void {

    this.service.startUp(this.data);
    this.customObj = this.service.getCustomObj();
    this.messages = this.service.getMessages();
    this.numPower= this.service.getMPower();
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


/***
 * Depedency Injection
 * 
 * 1. Constructor Injection
 * 2. Variable Injection
 * 3. Interface Injection
 * 4. Setter Injection
 * 
 * Angular supports only constructor injection
 * 
 */