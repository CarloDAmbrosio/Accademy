import { Component } from '@angular/core';
import { ServizioService } from '../services/servizio.service';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.css']
})
export class VisiteComponent {
constructor(private rest:ServizioService){}
visite:any;

ngOnInit(){
  const onSuccess=(response:any) => this.visite=response;
  return this.rest.getVisite().subscribe(onSuccess);
}

}
