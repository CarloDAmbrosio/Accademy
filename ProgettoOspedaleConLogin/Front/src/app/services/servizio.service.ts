import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  constructor(private http:HttpClient) {}

  getMedici(){
    const url=`http://localhost:8080/api/test/getMedici`;
    return this.http.get(url);
  }

  getReparti(){
    const url=`http://localhost:8080/api/test/allReparti`;
    return this.http.get(url);
  }

  getDettagliPaziente(user:any){
    const url=`http://localhost:8080/api/test/allPazienti/${user}`;
    return this.http.get(url);
  }

  elimina(id:any){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const url=`http://localhost:8080/api/test/deleteMedico/${id}`;
    return this.http.delete(url,{headers:headers}); //Questo per aggiornare automaticamente la lista dopo l'eliminazione di qualcosa se si aspetta un void in spring
  }

  getEsami(){
    const url=`http://localhost:8080/getEsami`;
    return this.http.get(url);
  }
  repartoByIdMedico(id:any){
    const url=`http://localhost:8080/api/test/repartoByIdMedico/${id}`
    return this.http.get(url);
  }

  esamiPaziente(id:any){
    const url=`http://localhost:8080/api/test/visitaPaziente/${id}`;
    return this.http.get(url);
  }

  getVisite(){
    const url = `http://localhost:8080/getVisita`;
    return this.http.get(url);
  }

  uploadPdf(id: number, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);
    const url = `http://localhost:8080/api/test/uploadFile/${id}`;
    return this.http.post<any>(url, formData);
  }

  downloadPdf(id: number): Observable<HttpResponse<Blob>> {
    const url = `http://localhost:8080/api/test/downloadFile/${id}`;
    return this.http.get(url, {
      responseType: 'blob',
      observe: 'response'
    });
  }

  addMedico(medico:any){
    const url=`http://localhost:8080/api/test/addMedico`;
    return this.http.post(url,medico);
  }

  filtra(dataInizio: any, dataFine: any, visita: any) {
    const url = `http://localhost:8080/filtraByData?start_date=${dataInizio}&end_date=${dataFine}&description=${visita}`;
    return this.http.get(url);
  }

  associaMedico(idReparto:any,idMedico:any) {
    const url = `http://localhost:8080/api/test/associaMedico/${idReparto}/${idMedico}`;
    return this.http.put(url,{});
  }

  addPaziente(paziente:any) {
    const url = `http://localhost:8080/api/test/addPaziente`;
    return this.http.post(url,paziente);
  }

}
