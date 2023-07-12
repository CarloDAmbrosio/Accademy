import { Component } from '@angular/core';
import { ServizioService } from '../services/servizio.service';

@Component({
  selector: 'app-esami',
  templateUrl: './esami.component.html',
  styleUrls: ['./esami.component.css']
})
export class EsamiComponent {

  constructor(private rest:ServizioService){}
  esami:any;
  ngOnInit(){
    const onSuccess = (response:any) => this.esami=response;
    return this.rest.getEsami().subscribe(onSuccess);
  }

}
