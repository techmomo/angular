import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { routes } from 'src/app/routes';

@Component({
  selector: 'app-employeeinfo',
  templateUrl: './employeeinfo.component.html',
  styleUrls: ['./employeeinfo.component.css']
})
export class EmployeeinfoComponent implements OnInit {

  employeeInfo:string | null ='';

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // get parameters from the route
    this.route.paramMap.subscribe(map=>{
      console.log(`Mr./ Ms. ${map.get('name')} has been saved successfully`);
      this.employeeInfo = map.get('name');
    });
  }
}
