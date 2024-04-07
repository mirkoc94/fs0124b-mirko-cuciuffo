import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { iMovie } from '../models/i-movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) {
    this.getAll().subscribe()
  }

  moviesUrl:string = environment.moviesUrl

  getAll(){
    return this.http.get<iMovie[]>(this.moviesUrl)
  }

}
