import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProgettoRicette';
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  loggato:boolean=false;
  
  constructor(private tokenStorageService: TokenStorageService) { }


  ngOnInit(): void {  
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log(this.isLoggedIn)

    if (this.isLoggedIn) {
      this.loggato=true
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  
 

}
