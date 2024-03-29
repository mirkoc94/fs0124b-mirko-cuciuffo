import { Component, Input } from '@angular/core';
import { iTodo } from '../../Models/i-todo';
import { TodosService } from '../../Service/todos.service';
import { UsersService } from '../../Service/users.service';
import { iLinkedUser } from '../../Models/i-linked-user';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

  @Input() list!:iTodo

  linkedId: iLinkedUser[] = []

  constructor(private userSvc:UsersService, private todosSvc:TodosService) {}

  ngOnInit() {

    this.matching()

  }

  matching() {
    for (let user of this.userSvc.users) {
      let matchedUser = this.todosSvc.todos.find(todo => todo.userId === user.id)
      console.log(matchedUser);


      if (matchedUser) {
        let mixedId = {
          firstData: user,
          secData: matchedUser
        }
        this.linkedId.push(mixedId)
      }
    }
    console.log(this.linkedId);
  }

}
