import { Component } from '@angular/core';
import { iCar } from '../../Models/i-car';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrl: './fiat.component.scss'
})
export class FiatComponent {

  carArr:iCar[] = [];

  constructor(private carSvc:CarService){}

  ngOnInit() {

  this.carSvc.getCarsByBrand("Fiat")
  .then(res => this.carArr = res)

  }

}
