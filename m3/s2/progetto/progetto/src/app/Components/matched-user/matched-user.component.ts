import { Component } from '@angular/core';
import { TodosService } from '../../Service/todos.service';
import { UsersService } from '../../Service/users.service';

@Component({
  selector: 'app-matched-user',
  templateUrl: './matched-user.component.html',
  styleUrl: './matched-user.component.scss'
})
export class MatchedUserComponent {

  linkedId: any[] = []

  constructor(private userSvc:UsersService, private todosSvc:TodosService) {}

  ngOnInit() {

    this.matching()

  }

  matching() {
    for (let user of this.userSvc.users) {
      let matchedUser = this.todosSvc.todos.find(todo => todo.userId === user.id)

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
