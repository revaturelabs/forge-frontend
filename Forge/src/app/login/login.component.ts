import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';   
import { AuthService } from '../auth-service.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import {User} from '../user';
import { RegisterUserService } from '../reg-user-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder : FormBuilder,  
    private router : Router,  
    private authService : AuthService,  
    private regService: RegisterUserService
  ) { }

  model: User[];   

  loginError:String='';
  

loginForm: FormGroup;  
message: string;  
returnUrl: string;  

  ngOnInit() {  
  
    this.loginForm = this.formBuilder.group({  
    email: ['', Validators.required],  
    password: ['', Validators.required] 
  });
  
  this.returnUrl='./user-home';
  this.authService.logout();
  console.log(localStorage.getItem('token'));
  }

  get f() { return this.loginForm.controls; }  

  login() {

    this.regService.getUsers().subscribe(
      data=>{
        this.model=data;
      }
    );


    console.log(this.model);  
  
    // stop here if form is invalid  
    if (this.loginForm.invalid) {  
     
      
       return;  
    }  
    else {  
    
      for (let i: number = 0; i < this.model.length; i++) {
       if (this.f.email.value == this.model[i]["email"] && this.f.password.value == this.model[i]["password"]) {  
          console.log("Login successful");            
          localStorage.setItem('isLoggedIn', "true");  
          localStorage.setItem('token', JSON.stringify(this.model[i]));  
          this.router.navigate([this.returnUrl]);  
          this.loginError='';
       }  
    else {  
       this.loginError='The credentials dont match any in our system, please check your username and password.' 
       }  
      }  
    }  

  }
}
