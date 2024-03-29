import { UsersService } from './../../Service/users.service';
import { Component } from '@angular/core';
import { iUser } from '../../Models/i-user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  userArr:iUser[] = []

  constructor(private userSvc:UsersService){}

  ngOnInit(){
    this.userArr = this.userSvc.getAllUsers()
  }

}
