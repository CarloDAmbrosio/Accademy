import { Component } from '@angular/core';
import { RicetteService } from '../services/ricette.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  ricette:any;
  searchTerm: string = '';
  searchIngr: string = '';
  searchNoIngr: string = '';
  constructor(private rest:UserService){
    this.ricette = [];
  }

  ngOnInit(){
    this.loadAll();
  }

  loadAll() {
    const onSuccess=(response:any)=>this.ricette=response;
    return this.rest.getPublicContent().subscribe(onSuccess);
    
  }


}
