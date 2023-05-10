import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuform=[{name:"Add Advocate",link:'/advocate'},{name:"Add Client",link:'client'},{name:"Add Case",link:'newcase'},
            {name:"Report",link:'report'},{name:"Advocate Profile",link:'advocate-profile'},{name:"LOG OUT",link:'login'}];
  isMenu=false;
  constructor(private route:Router,
              private location:Location) { }

  ngOnInit(): void {
  }
  redirectTo(val:any){
    console.log(val)
    if(val.name=="LOG OUT"){
      this.logout();
      return;
    }
    this.route.navigate([val.link]);
  }
 
  onToggleMenu() {
    this.isMenu = !this.isMenu;

    if (!this.isMenu) {
      this.location.back();
    }
  }
  logout(){
    window.localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('isLoggedIn');
    
    window.localStorage.clear();

    this.route.navigate(['/login']);
  }
}
