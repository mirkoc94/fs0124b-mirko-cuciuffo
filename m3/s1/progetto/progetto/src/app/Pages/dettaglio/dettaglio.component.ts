import { Component } from '@angular/core';
import { iCar } from '../../Models/i-car';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrl: './dettaglio.component.scss'
})
export class DettaglioComponent {

  carArr:iCar[] = [];

  constructor(private carSvc:CarService){}

  ngOnInit() {}
}
