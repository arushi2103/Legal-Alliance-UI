import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { group } from 'console';
import { Route,Router } from '@angular/router';
import { privateDecrypt } from 'crypto';
import { HttpClient } from '@angular/common/http';

import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clientform:FormGroup=new FormGroup({});
  
  get clientName(){
    return this.clientform.get('Name')
  }
  get clientMobileNumber(){
    return this.clientform.get('Number')
  }
  get clientAddress(){
    return this.clientform.get('Address')
  }



  constructor(private fb:FormBuilder,
              private route:Router,
              private http:HttpService) { }

  ngOnInit(): void {
    this.clientform=this.fb.group({
      Name:['',[Validators.required]],
      Number:['',Validators.required],
      Address:['',Validators.required]

      
    })

    let flag=window.localStorage.getItem("isLoggedIn");
    if (flag!=="yes"){
      this.route.navigate(["login"]);
      return ;
    }

      
  }
  clientInput=[this.clientform.get('name'),this.clientform.get('Number'),this.clientform.get('Address')];
  clientInputPlaceholder=["Enter Name ","Enter Number","Address"]
  showImgInput:boolean=false;

  onSubmit(){
    // console.log(this.clientform.value);
    this.http.post('clients', this.clientform.value).subscribe((response)=>{
      console.log(response);
      console.log(this.clientform.value);
      this.route.navigate(['newcase']);

    })
  }
  onSave(){
    console.log("Client Added")
    console.log(this.clientform.value);
     this.route.navigate(['newcase']);
  }
  showMenu(){
    this.route.navigate(['menu']);
  }
  addImg(){
    // this.showImgInput=true;
  }
  

}
