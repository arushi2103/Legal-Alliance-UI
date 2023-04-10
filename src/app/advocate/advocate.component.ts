import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormArray, FormControl } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ADVOCATE_URL} from './../Constants/constant'
import { HttpService } from '../services/http.service';


interface IAdvocate {
  advocateName: string;
  mobileNumber: number;
  joiningDate: string;
  address: string;
}
@Component({
  selector: 'app-advocate',
  templateUrl: './advocate.component.html',
  styleUrls: ['./advocate.component.scss']
})
export class AdvocateComponent implements OnInit {
  
  std:IAdvocate={
    
    advocateName: " ",
    mobileNumber:123,
    joiningDate:" ",
    address: ""

  }
  
  
  
  
  advocateForm:FormGroup=new FormGroup({});
  
  specializationArray:string[]=["Tax Lawyer","Criminal Lawyer","Intellectual Property Lawyer","Business Lawyer","Family Lawyer"]

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
              private http:HttpService) { }

  ngOnInit(): void {
    
    this.advocateForm=this.fb.group({
      imageFile: ['',Validators.required],
      advocateName:['',[Validators.required]],
      mobileNumber:['',[Validators.required,Validators.pattern("^[0-9]*$"), Validators.minLength(10), Validators.maxLength(10)]],
      joiningDate:['',[Validators.required]],
      address:['',[Validators.required]],
      specialization: this.fb.array([])
    })
    
    let flag=window.localStorage.getItem("isLoggedIn");
    if (flag!=="yes"){
      this.route.navigate(["login"]);
      return ;
    }

  }
  onCheckboxChange(e:any) {
    const specialization: FormArray = this.advocateForm.get('specialization') as FormArray;
    if (e.target.checked) {
      specialization.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      specialization.controls.forEach((item: AbstractControl) => {
        if (item.value == e.target.value) {
          specialization.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  onSubmit(){
    // console.log(this.advocateForm.value);
    this.http.post(ADVOCATE_URL, this.advocateForm.value).subscribe((response)=>{
      console.log(response);
      console.log(this.advocateForm.value);
      this.route.navigate(['client']);

    })
  }
  showImgInput:boolean=false;
  addImg(){
    // this.showImgInput=true;
  }
 

  showMenu(){
    this.route.navigate(['menu']);
  }
  
  // to validate the form 
  // isFormValid: boolean = false;

  //   this.advocateForm.valueChanges.subscribe(() => {
  //     this.isFormValid = this.advocateForm.valid;
  //   });

}
