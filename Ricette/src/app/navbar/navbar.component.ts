import { Component } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  
ngOnInit(){
  if(sessionStorage.getItem("loggato")=="si"){
    this.isLoggedIn=true
  }
  
}
  isLoggedIn:boolean=false
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  loggato:any=sessionStorage.getItem("loggato")
  constructor(private tokenStorageService: TokenStorageService, private router : Router){
    
  }
  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    sessionStorage.removeItem("token");
    this.loggato=false
    
  }

}
