import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { Route,RouterLink,Router  } from '@angular/router';
import { HttpService } from '../services/http.service';
import { NEWCASES_URL } from '../Constants/constant';

@Component({
  selector: 'app-newcase',
  templateUrl: './newcase.component.html',
  styleUrls: ['./newcase.component.scss']
})
export class NewcaseComponent implements OnInit {
newCaseForm:FormGroup=new FormGroup({});


get caseNumber(){
  return this.newCaseForm.get('caseNumber');
}
get filingNumber(){
  return this.newCaseForm.get('filingNumber');
}
get filingDate(){
  return this.newCaseForm.get('filingDate');
}
get nameOfParty(){
  return this.newCaseForm.get('nameOfParty');
}
get date(){
  return this.newCaseForm.get('date');
}
get caseNextDate(){
  return this.newCaseForm.get('caseNextDate');
}
get amountReceived(){
  return this.newCaseForm.get('amountReceived');
}




  constructor(private fb:FormBuilder,
              private route:Router,
              private http:HttpService) { }

  ngOnInit(): void {
    this.newCaseForm=this.fb.group({
      caseNumber:['',[Validators.required]],
      filingNumber:['',[Validators.required]],
      filingDate:['',[Validators.required]],
      nameOfParty:['',[Validators.required]],
      date:['',[Validators.required]],
      caseNextDate:['',[Validators.required]],
      amountReceived:['',[Validators.required]],
      client:['',[Validators.required]],
      advocate:['',[Validators.required]]
    })
    let flag=window.localStorage.getItem("isLoggedIn");
    if (flag!=="yes"){
      this.route.navigate(["login"]);
      return ;
    }
   
  }
  clients=["one","two","three","four"];
  advocates=["one","two","three","four"];
  paymentdata=[];
  paymentmodes=["Cash","Debit Card/Credit Card","UPI","Net Banking "]

  onSubmit(){
    // console.log(this.newCaseForm.value);
    this.http.post(NEWCASES_URL, this.newCaseForm.value).subscribe((response)=>{
      console.log(response);
      console.log(this.newCaseForm.value);
      this.route.navigate(['advocate-profile'])

    })
  }
  onSave(){
    console.log("Newcase Is Added");
    console.log(this.newCaseForm.value);
    this.route.navigate(['advocate-profile'])
  }
  showMenu(){
    this.route.navigate(['menu']);
  }
  calculateAmount(){
   
  }


}
