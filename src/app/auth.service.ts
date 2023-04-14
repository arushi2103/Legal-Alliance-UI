import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 
export class AuthService {
 
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

  // login({ username, password }: any): Observable<any> {
  //   console.log(username,password)
  //   if (username === 'Apex@gmail.com' && password === 'Apex123') {
  //     this.setToken('xyz');
  //     return of({ username: 'Apex', email: 'Apex@gmail.com' });
  //   }
  //   return throwError(new Error('Failed to login'));
  // }
  

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}





   

// }
