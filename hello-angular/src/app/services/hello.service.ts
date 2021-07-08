import { Injectable } from '@angular/core';
import { MPower } from '../components/MPower';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }


  startUp(data:any){
    console.log('App Component has send some info '+data);
    
  }

  getMessages():string[] {
    return [
      'Hello',
      'How',
      'Welcome',
      'Hola'
    ];
  }

  getMPower():MPower{
    return {
      val: 10,
      pow: 3
    };
  }

  getCustomObj():any{
    return { 
      id: 1,
      name: 'Custom User'
    };
  }

}
