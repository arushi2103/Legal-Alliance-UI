import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class AuthService {
  login(value: any) {
    throw new Error('Method not implemented.');
  }
 
  constructor(private router:Router) {
   }
  
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return window.localStorage.getItem("isLoggedIn")==="yes"
  }
  logout() {
    localStorage.removeItem('token');
    window.localStorage.clear();
    this.router.navigate(['/login']);
  }
}





   


