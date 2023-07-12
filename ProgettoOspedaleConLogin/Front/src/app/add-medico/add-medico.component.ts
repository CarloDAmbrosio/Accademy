import { Component } from '@angular/core';
import { ServizioService } from '../services/servizio.service';

@Component({
  selector: 'app-add-medico',
  templateUrl: './add-medico.component.html',
  styleUrls: ['./add-medico.component.css']
})
export class AddMEdicoComponent {
  medico: any = {};
  successMessage!:boolean;

  constructor( private rest:ServizioService) {}

  submitForm() {
    this.rest.addMedico(this.medico).subscribe(
      (response) => {
        console.log('Medico aggiunto con successo:', response);
        this.successMessage = true;
      },
      (error) => {
        console.error('Errore durante l\'aggiunta del medico:', error);
        this.successMessage=false;
      }
    );
  }


}
