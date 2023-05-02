import { Component, OnInit } from '@angular/core';
import { ServizioService } from '../services/servizio.service';
import { HttpResponseBase } from '@angular/common/http';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  constructor(private rest:ServizioService){}

  dati!:any;
  selezione = 'tutti'
  anime!:any;

  ngOnInit(){
    const onSuccess=(response:any) => this.dati = response.data;
    this.rest.getAll().subscribe(onSuccess)
  }

  getAnime() {
    const onSuccess=(response:any) => this.anime = response.data;
    this.rest.getAnime().subscribe(onSuccess)
  }

  getManga() {
    const onSuccess=(response:any) => this.dati = response.data;
    this.rest.getManga().subscribe(onSuccess)
  }

  getData() {
    if (this.selezione === 'anime') {
      this.getAnime();
    } else {
      this.getManga();
    }
    if(this.selezione =='tutti'){
      this.rest.getAll().subscribe(response => {
        this.dati = response.data;
        this.anime = null;
      });
    } else {
      this.dati = null;
    }
  }


}
