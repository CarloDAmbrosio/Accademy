import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class ServiziComponent implements OnInit {
  mostraBeni: boolean = false;
  mostraScienza:boolean = false;
  mostraGiochi:boolean = false;
  mostraInformazioni() {
    this.mostraBeni = true;
  }
  nascondiInformazioni() {
    this.mostraBeni = false;
  }

  mostraInfoScienza(){
    this.mostraScienza = true;
  }

  nascondiInfoScienza(){
    this.mostraScienza=false;
  }

  mostraInfoGiochi(){
    this.mostraGiochi=true;
  }

  nascondiInfoGiochi(){
    this.mostraGiochi=false;
  }

  ngOnInit() {
  }

}
