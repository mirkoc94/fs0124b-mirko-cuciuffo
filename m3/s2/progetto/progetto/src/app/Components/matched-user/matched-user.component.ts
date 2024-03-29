import { Component, Input } from '@angular/core';
import { iLinkedUser } from '../../Models/i-linked-user';

@Component({
  selector: 'app-matched-user',
  templateUrl: './matched-user.component.html',
  styleUrl: './matched-user.component.scss'
})
export class MatchedUserComponent {

@Input() linkedUser!:iLinkedUser

}
