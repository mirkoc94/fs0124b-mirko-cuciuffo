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
        let random = Math.floor(Math.random() *res.length)
        if (res[random].available) {
          this.randArr.push(res[random])
        }
      }
      return this.randArr
    })
  }

  getCarsByBrand(marca:string):Promise<iCar[]> {
    return this.getAllCars()
    .then(res => res.filter(c => c.brand === marca))
  }

}
