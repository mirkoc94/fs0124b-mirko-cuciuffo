import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iContentJson } from './Models/i-content-json';
import { Subject } from 'rxjs';
import { iProduct } from './Models/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string = 'https://dummyjson.com/products'

  prefSubject = new Subject<iProduct>()
  carrSubject = new Subject<iProduct>()

  $preferiti = this.prefSubject.asObservable()
  $carrello = this.carrSubject.asObservable()

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get<iContentJson>(this.apiUrl)
    .pipe(map(c => c.products))
  }

  addToPref(product:iProduct){
    this.prefSubject.next(product)
  }

  addToCarr(product:iProduct){
    this.carrSubject.next(product)
  }

}
