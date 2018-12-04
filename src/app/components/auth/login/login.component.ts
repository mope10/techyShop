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
  private account: account;
  private condition = false;
  
  
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
    this.auth.login(this.account).subscribe((e)=>{
      console.log(e)
      this.condition = e.condition;
      console.log(this.condition)
      if(this.condition) {
        
        this.router.navigate(['/','admin','home']);
      }

    },(err)=>console.log(err),()=>console.log("completed"))
    
  }

}
