import { Component, Input } from '@angular/core';
import { iTodo } from '../../Models/i-todo';
import { TodosService } from '../../Service/todos.service';
import { UsersService } from '../../Service/users.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

  @Input() list!:iTodo

  connectedArray: any[] = [];

  constructor(private userSvc:UsersService, private todoSvc:TodosService) {
    this.connectArrays()
  }

  connectArrays() {

    this.connectedArray = this.todoSvc.todos.map(todo => {
      const correspondingItem = this.userSvc.users.find(user => user.id === todo.userId);
      return { ...todo, ...correspondingItem };
    });
    console.log(this.connectedArray);

  }

  ngOnInit() {
    this.connectArrays()
  }

}
