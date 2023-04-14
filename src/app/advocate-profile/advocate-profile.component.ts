import { Component, OnInit } from '@angular/core';
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
              private route:Router
              ) { }

  ngOnInit(): void {
    //to get advocates object from the database
    this.http.get(ADVOCATE_URL).subscribe((response)=>{
      this.Advocates=response;
    })
  }
  // deleteData(id:any){
  //   this.http.deleteAdvocate(this.Advocates).subscribe(()=>{
  //     this.Advocates=this.Advocates.filter(adv=>adv.id!==this.Advocates,id);
  //     console.log(`details of advocate ${id} deleted successfully`);
  //   },(error: { message: any; })=>{
  //     console.error(`Error deleting the details of advocate ${id}:${error.message}`);
  //   })
  // }
  deleteData(id:any) {
    const encodedId = encodeURIComponent(id);
    fetch(`ADVOCATE_URL/${encodedId}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        alert('Data deleted successfully');
        window.location.reload(); // Reload the page to reflect the changes
      } else {
        alert('Failed ');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Failed to delete data');
    });
  }
  
  showMenu(){
    this.route.navigate(['menu']);
  }
}
