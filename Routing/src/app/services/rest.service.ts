import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  url:string = "http://localhost:3000/users"
  constructor(private http:HttpClient) {
  }

  getCountries(){
    return this.http.get(this.url);
  }

}
