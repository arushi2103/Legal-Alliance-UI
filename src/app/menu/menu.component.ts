import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuform=[{name:"Add Advocate",link:'/advocate'},{name:"Add Client",link:'client'},{name:"Add Case",link:'newcase'},
            {name:"Report",link:'report'},{name:"Advocate Profile",link:'advocate-profile'},{name:"LOG OUT"}];
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  redirectTo(val:any){
    this.route.navigate([val]);
  }
  logout(){
    this.route.navigate(['/login']);
  }
}
