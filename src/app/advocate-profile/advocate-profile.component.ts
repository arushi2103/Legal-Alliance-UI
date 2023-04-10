import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {ADVOCATE_URL}from './../Constants/constant';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-advocate-profile',
  templateUrl: './advocate-profile.component.html',
  styleUrls: ['./advocate-profile.component.scss']
})
export class AdvocateProfileComponent implements OnInit {
  Advocates: any[] = [];
  constructor(private http:HttpService,
              private route:Router) { }

  ngOnInit(): void {
    //to get advocates object from the database
    this.http.get(ADVOCATE_URL).subscribe((response)=>{
      this.Advocates=response;
    })
  }
  // Advocates=["Advocate1","Advocate2","Advocate3","Advocate4","Advocate5"];
  onEdit(id: any){
    // navigate to the advocate form og give id and edit the data
    // this.route.navigate([`advocate/${id}`]);

  }
  // deleteItem(id:any){
  //   return this.http.delete(`${ADVOCATE_URL}/${id}`);
  // }
  onDelete(id:any){
    // this.deleteItem(id).subscribe(()=>{
    //   console.log(`details of advocate ${id} deleted successfully`);
    // },error=>{
    //   console.error(`Erroe deleting the details of advocate ${id}:${error.message}`);
    // })
  }
  showMenu(){
    this.route.navigate(['menu']);
  }
}
