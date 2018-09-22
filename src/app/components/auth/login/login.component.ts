import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private email:string;
  private password:string;
  
  constructor(private fb: FormBuilder) {
    this.createForm();
  }


  ngOnInit() {
  }
  createForm() {
    this.loginForm = this.fb.group({
      email:[[Validators.email,Validators.required]],
      password:[[Validators.required,Validators.minLength(8)]]
    });
  }

}
