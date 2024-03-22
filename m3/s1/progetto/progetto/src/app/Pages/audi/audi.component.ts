import { Component } from '@angular/core';
import { iCar } from '../../Models/i-car';
import { CarService } from '../../car.service';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {

  carArr:iCar[] = [];

  constructor(private carSvc:CarService){}

  ngOnInit() {

    this.carSvc.getCarsByBrand('audi')
    .then(res => this.carArr = res)

    this.carSvc.getColorByAvailability()
  }

}
