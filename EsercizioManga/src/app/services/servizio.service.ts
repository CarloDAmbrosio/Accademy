import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  constructor(private http: HttpClient) { }

  getAll(){
    const url = "https://api.jikan.moe/v4/anime"
    return this.http.get<any>(url);
  }

  getAnime(){
    const url = "https://api.jikan.moe/v4/genres/anime"
    return this.http.get<any>(url);
  }
  getManga(){
    const url = "https://api.jikan.moe/v4/manga"
    return this.http.get<any>(url);
  }

}
