import { Component, Input } from '@angular/core';
import { iMovie } from '../../models/i-movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() movie!:iMovie

}
