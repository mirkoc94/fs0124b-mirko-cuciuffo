import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { iUser } from '../models/i-user';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

type AccessData = {
  accessToken:string
  user:iUser
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<iUser|null>(null)

  user$ = this.authSubject.asObservable()
  isLoggedIn$ = this.user$.pipe(map(user => !!user))

  constructor(private http:HttpClient) { }

  register(newUser:Partial<iUser>):Observable<AccessData>{
    return this.http.post<AccessData>('http://localhost:3000/register',newUser)
  }

  //login(loginData:any):Observable<AccessData>{
//
  //}

}
