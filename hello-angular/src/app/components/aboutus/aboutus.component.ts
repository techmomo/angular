import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/app/entities/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private uService:UserService) { }

  users:UserDto[]=[];
  ngOnInit(): void {
    // id , email , first_name , last_name 
    this.uService.getUsers().subscribe(results=> this.users = this.uService.getUsersFromObservable(results));
  }
}
