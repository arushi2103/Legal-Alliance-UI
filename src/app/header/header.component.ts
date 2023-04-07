import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMenuShown:boolean=false;
  constructor() {
    this.isMenuShown =!this.isMenuShown;
   }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.isMenuShown =!this.isMenuShown;

  }

}
