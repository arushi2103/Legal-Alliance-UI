import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup}  from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Route, RouterLink,Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpService } from '../services/http.service';
import { ADVOCATE_URL } from './../Constants/constant';
import {LOGINCREDENTIALS_URL} from './../Constants/constant'
import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup = new FormGroup({});
 
  get username(){
    return this.loginform.get('username');
  }
  get password(){
    return this.loginform.get('password');
  }
  constructor(private fb:FormBuilder,
    private http:HttpService,
    private route:Router,
    private auth:AuthService,
    ) { 
   
  }
  ngOnInit(): void {
    if(window.localStorage.getItem("isLoggedIn")==="yes"){
      this.route.navigate(['/advocate']);
    }

    this.loginform=this.fb.group({
      username:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
    
  }

  getUser(url:string){
    return this.http.get(url)
  }
  // login(){
  //   console.log("Login button clicked");
    
  //   if(this.loginform.valid){
  //     this.auth.login(this.loginform.value).subscribe(
  //       (result)=>{
  //         window.localStorage.setItem("isLoggedIn","yes");
  //         this.route.navigate(['/advocate']);
  //       },
  //       (err:Error)=>{
  //         alert(err.message);
  //       }
  //     )
  //   }
    
  // }
// Submit method for sending input to the api and verifying 
// from database if it is a correct input or not
onSubmit() {
  // bcrypt.hash(this.loginform.get('password')?.value, 10, (err: any, hash: any) => {
   
  //   });
  const credentials = { email: this.loginform.get('username')?.value, password: this.loginform.get('password')?.value };
  this.http.post(LOGINCREDENTIALS_URL, credentials).subscribe(response => {
    // Handle server response
    if (response.login=='success') {
      window.localStorage.setItem("isLoggedIn","yes");
      console.log("Login button clicked");
      console.log(this.loginform.value);
      this.route.navigate([ADVOCATE_URL]);
    } else {
      alert('Invalid email or password');
    }
  });
}

}
