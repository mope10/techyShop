import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthserviceService} from '../../../../services/auth/authservice.service';
import {account} from '../../../../services/auth/authservice.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  account: account;
  condition = false;
  notification = "";
  
  
  constructor(private fb: FormBuilder,private auth : AuthserviceService,private router: Router) {
    this.createForm();
    
  }


  ngOnInit() {
  }
  createForm() {
    this.loginForm = this.fb.group({
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]]
    });
  }
  login(email, password) {
    this.account = {
      email: email,
      password: password
    }
    this.auth.login(this.account);
    if (!localStorage.getItem("token")){
      this.notification = "Your username or password is wrong"
    }
  }

}
