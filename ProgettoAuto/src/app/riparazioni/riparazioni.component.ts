import { Component } from '@angular/core';
import { ServizioService } from '../services/servizio.service';

@Component({
  selector: 'app-riparazioni',
  templateUrl: './riparazioni.component.html',
  styleUrls: ['./riparazioni.component.css']
})
export class RiparazioniComponent {

  constructor(private rest:ServizioService){}
  riparazioni:[]=[]

   ngOnInit(){
     const onSuccess=(res:any)=>this.riparazioni=res;
    return this.rest.getRiparazione().subscribe(onSuccess);
    console.log(this.riparazioni);
   }

}
