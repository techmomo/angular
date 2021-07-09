import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  submitted:boolean=false;
  eRegisterForm:FormGroup=new FormGroup({});

  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {
    this.eRegisterForm = this.builder.group({
      name: ['',Validators.required],
      email: ['',Validators.email],
      password: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]]
    });
  }

  get eRegisterFormControl(){
    return this.eRegisterForm.controls;
  }

  registerEmployee(){
    this.submitted = true;
    console.log(this.eRegisterForm);
    if(this.eRegisterForm.valid){
      console.log('Form Submitted without errors...');
    }
  }
}
