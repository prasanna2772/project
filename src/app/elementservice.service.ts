import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElementserviceService {
 
  constructor(public http:HttpClient) {
    console.log("service called");
   }
gets(data){
  console.log(data);
return this.http.get("http://localhost:4200");
}
  
  }
  
