import { HttpBackend, HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(private _HttpClient:HttpClient) {
    this._HttpClient.get("http://localhost:3000/products").subscribe((data)=>{
      console.log(data);
    })
   }
}
