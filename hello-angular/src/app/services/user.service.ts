import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { reqBaseUrl } from "../constants";
import { UserDto } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  users:UserDto[] = [];

  getUsers():Observable<any>{
    return this.http.get(reqBaseUrl);
  }
  getUsersFromObservable(results:any):UserDto[]{
    try {
    for (const u of results.data) {
        this.users.push({
          id: u.id,
          name: u.first_name +' '+u.last_name,
          email: u.email,
          avatarUrl: u.avatar
        });
      }
    } catch (error) {
      console.error(error);
    }
    return this.users;
  }
}
