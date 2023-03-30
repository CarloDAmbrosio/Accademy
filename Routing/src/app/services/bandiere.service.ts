import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BandiereService {
  url:string = "https://restcountries.com/v2/all"
  constructor(private http:HttpClient) {
  }

  getPaese(){
    return this.http.get(this.url);
  }

  getAll(name:any){
    return this.http.get("https://restcountries.com/v2/name/"+name);
  }
}

