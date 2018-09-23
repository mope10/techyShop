import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  private password: string;
  validityStatement = "";
  private validity= false;
  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
  }
  savePassword(password: string,rePassword:string) {
    this.password = password;
    if(rePassword) {
      if (this.password === rePassword) {
        this.validityStatement = "fa fa-check"
        this.validity = true;
      }
      else {
        this.validityStatement = "fa fa-times"
        this.validity = false;
      }
    }
  }
  comparePassword(password: string) {
    if (password) {
      if (this.password === password) {
        this.validity = true;
        this.validityStatement="fa fa-check";
  
      }
      else {
        this.validity = false;
        this.validityStatement = "fa fa-times"
      }
    }
    
    
  }
  createForm() {
    this.registrationForm = this.fb.group({
      firstName  : ['',[Validators.required]],
      lastName   : ['',[Validators.required]],
      email      : ['',[Validators.required,Validators.email]],
      phoneNumber: ['',[Validators.required,Validators.minLength(11)]],
      password   : ['',[Validators.required,Validators.minLength(8)]],
      rePassword: ['',[Validators.required]],
      address    : ['',[Validators.required]]
    });
  }
}
