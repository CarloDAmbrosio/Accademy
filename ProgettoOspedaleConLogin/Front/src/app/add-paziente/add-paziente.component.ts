import { Component } from '@angular/core';
import { ServizioService } from '../services/servizio.service';

@Component({
  selector: 'app-add-paziente',
  templateUrl: './add-paziente.component.html',
  styleUrls: ['./add-paziente.component.css']
})
export class AddPazienteComponent {
  paziente: any = {};
  successMessage!:boolean;

  constructor( private rest:ServizioService) {}

  submitForm() {
    this.rest.addPaziente(this.paziente).subscribe(
      (response) => {
        console.log('Paziente aggiunto con successo:', response);
        this.successMessage = true;
      },
      (error) => {
        console.error('Errore durante l\'aggiunta del paziente:', error);
        this.successMessage=false;
      }
    );
  }
}
