import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advocate',
  templateUrl: './advocate.component.html',
  styleUrls: ['./advocate.component.scss']
})
export class AdvocateComponent implements OnInit {
  advocateForm:FormGroup=new FormGroup({});
  get advName(){
    return this.advocateForm.get('advocateName');
  }
  get advNumber(){
    return this.advocateForm.get('mobileNumber')
  }
  get advJoiningDate(){
    return this.advocateForm.get('joiningDate')
  }

  get advAddress(){
    return this.advocateForm.get('address')
  }



  constructor(private fb:FormBuilder,
              private route:Router,
              private http:HttpClient) { }

  ngOnInit(): void {
    
    this.advocateForm=this.fb.group({
      advocateName:['',[Validators.required]],
      mobileNumber:['',[Validators.required]],
      joiningDate:['',[Validators.required]],
      address:['',[Validators.required]],
    })
    let flag=window.localStorage.getItem("isLoggedIn");
    if (flag!=="yes"){
      this.route.navigate(["login"]);
      return ;
    }

  }
  onSubmit(){
    // console.log(this.advocateForm.value);
  }
  onSave(){
    console.log("Advocate Added");
    console.log(this.advocateForm.value);
    this.route.navigate(['client']);
  }
  submitForm(){
    const formValue=this.advocateForm.value;
    this.http.post('/submit-form', formValue).subscribe((response) => {
      console.log(response);
    });
  }

}
