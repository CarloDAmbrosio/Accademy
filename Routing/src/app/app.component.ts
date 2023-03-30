import { Component } from '@angular/core';
import { BandiereService } from './services/bandiere.service';
import { RestService } from './services/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';
  country!:any[];

  constructor(private rest: BandiereService) {
  }

  // constructor(private rest:RestService){

  // }

  // ngOnInit(){
  //   const onSuccess = (response:any)=> this.country = response;
  //   const onError = (response:any)=> console.log(response);
  //   this.rest.getCountries().subscribe({
  //     next:(response:any)=>{ this.country=response},
  //     error: (err:any)=>console.log(err)
  //   });
  // }

  ngOnInit(){
    const onSuccess = (response:any) => this.country = response;
    const onError = (response:any) => console.log(response);
    this.rest.getPaese().subscribe({
      next : (response:any) => {this.country = response},
      error : (err:any) => console.log(err)
    })
  }

}
