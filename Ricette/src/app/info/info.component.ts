import { Component } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

constructor(private token:TokenStorageService){}
userCorrente:any;

ngOnInit(){
this.userCorrente = this.token.getUser();
console.log(this.token.getUser());
}

}
