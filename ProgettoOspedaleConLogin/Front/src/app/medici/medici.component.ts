import { Component } from '@angular/core';
import { ServizioService } from '../services/servizio.service';

@Component({
  selector: 'app-medici',
  templateUrl: './medici.component.html',
  styleUrls: ['./medici.component.css']
})
export class MediciComponent {

constructor(private rest:ServizioService){}
medici:any;
delete:any;
repartoMedico:any;
mostraReparto:boolean=false;
mostraTutto:boolean=true;


ngOnInit(){
  this.getMedici();
}

getMedici(){
  const onSuccess=(response:any)=>this.medici=response;
  return this.rest.getMedici().subscribe(onSuccess);
}

elimina(id:any){
  console.log(id);
   return this.rest.elimina(id).subscribe((response:any)=>{
    console.log(response);
    this.ngOnInit();
   })

}

visualizzaReparto(id:any){
  console.log(id)
  this.mostraTutto=false;
  return this.rest.repartoByIdMedico(id).subscribe((response:any)=>{
    this.mostraReparto=true;
    this.repartoMedico=response;
  })
}

}

export class Medico{
  nome:String;
  cognome:String;
  dataN:String;
  luogoN:String;

constructor(nome:String, cognome:String, dataN:String,luogoN:String) {
  this.nome = nome;
  this.cognome = cognome;
  this.dataN = dataN;
  this.luogoN =luogoN;
}

}
