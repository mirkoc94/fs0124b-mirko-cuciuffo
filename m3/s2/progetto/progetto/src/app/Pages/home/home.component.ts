import { Component } from '@angular/core';
import { iTodo } from '../../Models/i-todo';
import { TodosService } from '../../Service/todos.service';
import { UsersService } from '../../Service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  todoArr:iTodo[] = [];

  constructor(private todoSvc:TodosService){}

  ngOnInit(){
    this.todoArr = this.todoSvc.getAllTodos()
  }

}

