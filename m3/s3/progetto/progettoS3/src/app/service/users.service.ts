import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUser } from '../models/i-user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) {
    this.getAll().subscribe()
  }

  apiUrl:string = environment.usersUrl

  getAll(){
    return this.http.get<iUser[]>(this.apiUrl)
  }

}
