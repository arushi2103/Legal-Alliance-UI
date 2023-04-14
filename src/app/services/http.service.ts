import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ADVOCATE_URL}from './../Constants/constant'
import {LOGINCREDENTIALS_URL}from './../Constants/constant';
import {CLIENTS_URL}from './../Constants/constant';
import {NEWCASES_URL}from './../Constants/constant';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseURL;
  
  constructor(private http:HttpClient,
             ) {
    this.baseURL=environment.baseURL;

   }
   get(url:string):Observable<any>{
    return this.http.get(this.baseURL+url);
    
   }
   post(url:string,data:any):Observable<any>{
    return this.http.post(this.baseURL+url,data);
   }
   delete(url:string,data:any):Observable<any>{
    return this.http.delete(url,data);
   }
   deleteAdvocate(id:any):Observable<any>{
    return this.http.delete(`${this.baseURL+ADVOCATE_URL}/${id}`);
   }
}
