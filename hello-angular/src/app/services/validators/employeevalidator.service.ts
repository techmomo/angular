import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeevalidatorService {

  constructor() { }

  validatePassword():ValidatorFn{

    return (control:AbstractControl): { [ key:string ]:any }=>{
          if(!control.value){
            return { };
          }
          const regex = new RegExp('^A-Za-z0-9');
          const valid = regex.test(control.value);
          return valid ? {} : { invalidPassword: true };
    };
  }
}
