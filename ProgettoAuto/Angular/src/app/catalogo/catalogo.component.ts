import { Component } from '@angular/core';
import { ServizioService } from '../services/servizio.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  constructor(private rest:ServizioService){}
  auto!:any;
  anno!:any;
  mostraOptional:boolean=false;
  mostraTutto:boolean=true;
  optionalAuto!:any;
  ngOnInit(){
   this.getAuto();
  }

  getAuto(){
    const onSuccess = (response:any) =>this.auto=response;
    return this.rest.getAuto().subscribe(onSuccess)
  }

  immatricola(id: any) {
    const datadaImmatricola = new Date().getFullYear();
    console.log(datadaImmatricola, id);
    const onSuccess = (response: any) => {
      this.anno = response;
      this.ngOnInit();
    };
    return this.rest.immatricola(id, datadaImmatricola).subscribe(onSuccess);
  }

  optional(id:any){
    console.log(id);
    this.mostraTutto=false;
    this.rest.optionalByIdAuto(id).subscribe((response: any) => {
      this.optionalAuto = response;
      this.mostraOptional = true;
    });
  }


}
