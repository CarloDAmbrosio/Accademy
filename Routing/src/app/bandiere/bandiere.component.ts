import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BandiereService } from '../services/bandiere.service';

@Component({
  selector: 'app-bandiere',
  templateUrl: './bandiere.component.html',
  styleUrls: ['./bandiere.component.css']
})
export class BandiereComponent {
  country!:any[];

  constructor(private rest: BandiereService, private router: Router) {
  }

  ngOnInit(){
    const onSuccess = (response:any) => this.country = response;
    const onError = (response:any) => console.log(response);
    this.rest.getPaese().subscribe(onSuccess, onError);
    }
  }


