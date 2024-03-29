import { Component } from '@angular/core';
import { TodosService } from '../../Service/todos.service';
import { iTodo } from '../../Models/i-todo';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {

  todos: iTodo[] = []

  constructor(private todoSvc:TodosService) {
    this.todos = this.todoSvc.getCompleted()
  }

}
