import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  private loggedIn = new BehaviorSubject<boolean>(false);
  login(username: string, password: string): Observable<any> {
    this.loggedIn.next(true);
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
    
  }

  logout() {
    this.loggedIn.next(false);
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}