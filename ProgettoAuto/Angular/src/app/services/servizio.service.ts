import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Riparazione } from '../add-riparazione/add-riparazione.component';
@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  constructor(private http:HttpClient) { }

   getRiparazione(){
     const url = `http://localhost:8080/riparazioniAutoUsate`;
     return this.http.get<any>(url);
    }

    getAuto(){
      const url = `http://localhost:8080/allAuto`;
      return this.http.get<any>(url);
    }

    immatricola(id:any,anno:any){
      const url = `http://localhost:8080/immatricola/${id}/${anno}`;
      return this.http.put<any>(url,[]);
    }
    optionalByIdAuto(id:any){
      const url = `http://localhost:8080/getOptionalByIdAuto/${id}`;
      return this.http.get<any>(url);
    }

    addRiparazione(r:Riparazione){
      const url=`http://localhost:8080/addRiparazione`
      return this.http.post(url,r);
    }

}
