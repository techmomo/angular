import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';
  message:string = ' Hello & welcome to angular';

  infoHandler(msgInfo:any){
    console.log(msgInfo);
  }
}
