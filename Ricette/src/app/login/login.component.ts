import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authservice.service';
import { TokenStorageService } from '../services/token-storage.service';

import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = "no";
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = "si";
      this.roles = this.tokenStorage.getUser().roles;
    }
    if(sessionStorage.getItem("loggato")=="si")
    this.router.navigate(['']);
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        sessionStorage.setItem("token",data.accessToken)
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = "si";
        sessionStorage.setItem("loggato",this.isLoggedIn)
        this.roles = this.tokenStorage.getUser().roles;
       this.reloadPage();
     
          
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
