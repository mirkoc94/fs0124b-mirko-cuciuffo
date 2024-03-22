import { Component } from '@angular/core';
import { iCar } from '../../Models/i-car';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  carArr:iCar[] = [];
  randArr:iCar[] = [];

  constructor(private carSvc:CarService){}

  ngOnInit() {
    this.carSvc.getAllCars()
    .then(res => this.carArr = res)

    this.carSvc.getRandomCar(2)
    .then(res => this.randArr = res)

    this.carSvc.getColorByAvailability()
  }

}
