import { Component } from '@angular/core';
import { iCar } from '../../Models/i-car';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {

  carArr:iCar[] = [];

  constructor(private carSvc:CarService){}

  ngOnInit() {

    this.carSvc.getCarsByBrand("Ford")
    .then(res => this.carArr = res)

  }
}
