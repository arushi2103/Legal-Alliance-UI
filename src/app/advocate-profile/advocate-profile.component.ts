import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advocate-profile',
  templateUrl: './advocate-profile.component.html',
  styleUrls: ['./advocate-profile.component.scss']
})
export class AdvocateProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Advocates=["Advocate1","Advocate2","Advocate3","Advocate4","Advocate5"];

}
