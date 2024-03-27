import { iProduct } from '../../Models/i-product';
import { ProductService } from './../../product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  arrProd:iProduct[]=[]

  constructor(private productSvc:ProductService) {}

  ngOnInit(){

    this.productSvc.getAll().subscribe(products => {
      this.arrProd = products
    })
  }
}
