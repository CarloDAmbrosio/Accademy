import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private router: Router) {

}

// utenti : any[] = [
//   {id:1, nome:"Luca", cognome:"Criscuolo", eta:38, color:"green"},
//   {id:2, nome:"Nicola", cognome:"Cappello", eta:17 , color:"blue"},
//   {id:3, nome:"Alfonso", cognome :"Montefusco", eta:21, color:"red"},
//   {id:4, nome:"Carlo", cognome:"D'Ambrosio", eta:35 , color:"orange"},
//   {id:5, nome:"Gianpiero", cognome:"Lo Tufo", eta:23, color:"black"},
//   {id:6, nome:"Giuseppe", cognome:"Cataldo", eta:23, color:"purple"},
// ]

}
