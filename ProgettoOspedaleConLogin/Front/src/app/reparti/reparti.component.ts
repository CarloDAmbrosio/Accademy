import { Component } from '@angular/core';
import { ServizioService } from '../services/servizio.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reparti',
  templateUrl: './reparti.component.html',
  styleUrls: ['./reparti.component.css']
})
export class RepartiComponent {

  constructor(private rest:ServizioService){}
  reparti!:any;
  medici:any;
  idMedico:any;

  ngOnInit(){
    this.reparti = this.rest.getReparti();
    this.getMedici();
  }

  associa(idReparto:any){
    console.log(this.idMedico,idReparto);
    const onSuccess=(res:any)=>this.ngOnInit();
    return this.rest.associaMedico(this.idMedico, idReparto).subscribe(onSuccess);
  }

  getMedici(){
    const onSuccess=(response:any)=>this.medici=response;
    return this.rest.getMedici().subscribe(onSuccess);
   }

}
