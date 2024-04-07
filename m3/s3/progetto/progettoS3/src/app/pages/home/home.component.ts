import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private http:HttpClient){}

  usersUrl:string = environment.usersUrl

  ngOnInit(){

    this.http.get(this.usersUrl).subscribe()

  }

}
