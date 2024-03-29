import { Component, Input } from '@angular/core';
import { iUser } from '../../Models/i-user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() user!:iUser
}
