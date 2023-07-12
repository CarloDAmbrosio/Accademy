import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage-service.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private tokenStorageService: TokenStorageService) {
  }
  loggato:boolean=false;

  ngOnInit(){
    if(sessionStorage.getItem('auth-token')) {
      this.loggato=true;
    }
  }

  logOut(){

    this.tokenStorageService.signOut();
    window.location.reload();
    sessionStorage.removeItem("token");
    this.loggato=false;
    this.router.navigate(['']);
    setTimeout(() => {
      this.reloadPage();
    },1)
  }

  reloadPage(): void {
    window.location.reload();
  }
}
