import { Component, OnInit } from '@angular/core';
import { ServizioService } from '../services/servizio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-riparazione',
  templateUrl: './add-riparazione.component.html',
  styleUrls: ['./add-riparazione.component.css']
})
export class AddRiparazioneComponent implements OnInit {

  constructor(private rest:ServizioService, private fb: FormBuilder, private route:Router){}
  riparazioneForm!: FormGroup;
  livelloValue!:number;
  spesaValue!:number;
  tipoValue:String = '';
  ngOnInit(): void {
    this.riparazioneForm = this.fb.group({
      livGravita: ['', Validators.required],
      spesa: ['',Validators.required],
      tipo: ['',Validators.required]
    });
  }

  onSubmit(){
    this.livelloValue = this.riparazioneForm.get('livGravita')?.value;
    this.spesaValue = this.riparazioneForm.get('spesa')?.value;
    this.tipoValue = this.riparazioneForm.get('tipo')?.value;
    if(this.spesaValue<1000&&this.livelloValue>=7){
      console.log("La spesa minima per un livello di gravità 7 o superiore è di 1000 euro.");
    }
    let r  = new Riparazione(this.livelloValue, this.spesaValue, this.tipoValue);
    console.log(r);
    this.rest.addRiparazione(r).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.route.navigate([''])
  }

}
export class Riparazione{

  livGravita!:number;
  spesa!:number;
  tipo:any;
  constructor(livello:number,spesa:number,tipo:any){
    this.livGravita=livello,
    this.spesa=spesa,
    this.tipo=tipo
  }
}
