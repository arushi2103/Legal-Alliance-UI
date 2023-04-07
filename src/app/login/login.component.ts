import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup}  from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Route, RouterLink,Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
  constructor(private fb:FormBuilder,
    private http:HttpClient,
    private route:Router,
    private auth:AuthService) { 
   
  }
  ngOnInit(): void {
    window.localStorage.clear();
    this.loginform=this.fb.group({
      username:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
    
  }

  getUser(url:string){
    return this.http.get(url)
  }
  login(){
    console.log("Login button clicked");
    if(this.loginform.valid){
      this.auth.login(this.loginform.value).subscribe(
        (result)=>{
          window.localStorage.setItem("isLoggedIn","yes");
          this.route.navigate(['advocate']);
        },
        (err:Error)=>{
          alert(err.message);
        }
      )
    }
    // this.getUser("https://jsonplaceholder.typicode.com/users").subscribe((res)=>{
    //   console.log(res)
    //   window.localStorage.setItem("isLoggedIn","yes")
    //   this.route.navigate(['advocate'])
    // },(err)=>{
    //   console.log(err)
    // });
    
  }

  submitForm(){
    const formValue=this.loginform.value;
    this.http.post('/localhost:4200', formValue).subscribe((response) => {
      console.log(response);
    });
  } 
}
