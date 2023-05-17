import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { RicetteService } from '../services/ricette.service';


@Component({
  selector: 'app-add-ricetta',
  templateUrl: './add-ricetta.component.html',
  styleUrls: ['./add-ricetta.component.css']
})
export class AddRicettaComponent {
  text:any
  i:any=0;
  ricettaForm!: FormGroup;
  nomeValue: string = '';
  procedimentoValue: string = '';
  inputs: string[] = [''];

  constructor(private fb: FormBuilder, private rest: RicetteService) { }

  ngOnInit(): void {
    this.ricettaForm = this.fb.group({
      nome: [''],
      procedimento: [''],
      ingrediente: new FormControl('')
    });
  }
 ingredientiValues: any[] = [''];

 onSubmit1(){
  this.nomeValue = this.ricettaForm.get('nome')?.value;
  this.procedimentoValue = this.ricettaForm.get('procedimento')?.value;
  console.log(this.ingredientiValues)
  let r = new Ricetta(this.nomeValue, this.procedimentoValue,this.ingredientiValues)
  console.log(r)
  this.rest.addRicetta(r).subscribe(
    (data) => {
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
  // this.route.navigate(['lista'])
 }

 salva(ingrediente:any){
  this.ingredientiValues[this.i]=ingrediente;
  console.log(this.ingredientiValues)
   this.i++;
   this.text=""
  }

}

export class Ricetta{

  nome:any
  procedimento:any
  ingredienti: any[] = [""];

  constructor(nome:any,procedimento:any,ingredienti:any[]){
    this.nome=nome,
    this.procedimento=procedimento,
    this.ingredienti=ingredienti
  }
}





