import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RicetteService {

  constructor(private http:HttpClient){}

  getAll(){
    const url=`http://localhost:8080/api/ricette/all`;
    return this.http.get(url);
  }

  addRicetta(ricetta:any){
    const url=`http://localhost:8080/api/ricette/add`;
    return this.http.post(url,ricetta);
  }

}
