import { Component } from '@angular/core';
import { iProduct } from '../../Models/i-product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  arrProd:iProduct[]=[]

}
