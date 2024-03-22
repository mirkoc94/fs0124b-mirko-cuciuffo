import { Injectable } from '@angular/core';
import { iCar } from './Models/i-car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carArr:iCar[] = [];
  randArr:iCar[] = [];

  getAllCars():Promise<iCar[]> {
    return fetch('../assets/db.json')
    .then(res=>res.json())
    .then((res:iCar[])=>res)
  }

  getRandomCar(n:number):Promise<iCar[]> {
    this.randArr = []
    return this.getAllCars()
    .then(res => {
      for (let i = 0; i < n; i++) {
        let random = Math.floor(Math.random() *this.carArr.length)
        if (this.carArr[random].available) {
          this.randArr.push(this.carArr[random])
        }
      }
      return this.randArr
    })
  }

  getCarsByBrand(marca:string):Promise<iCar[]> {
    return this.getAllCars()
    .then(res => res.filter(c => c.brand === marca))
  }

  getColorByAvailability():void {
    this.getAllCars()
    .then(res => {

      let cardBody = document.getElementById('card-body');
      if (cardBody) {
        for (let i = 0; i < this.carArr.length; i++) {
          if (this.carArr[i].available) {
            cardBody.classList.add('bg-success')
          } else {
            cardBody.classList.add('bg-danger')
          }
        }
      }

    })
  }

}
