import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router,Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private route: Router, 
    private router:Router,
    private auth: AuthService,
    ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return true;
    // if (this.auth.isLoggedIn()){
    //   return true;
    // }
    // alert("You have not logged In")
    // this.router.navigate(['login']);
    // return false;
    
  }
  
}
