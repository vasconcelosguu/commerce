import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4:350}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cols = 3;
  rowHeight = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onColumnsUpdater(colNumber: number): void {
    this.cols = colNumber;
    this.rowHeight = ROWS_HEIGHT[this.cols]
  }

  onShowCategory(newCategory: string):void {
    this.category = newCategory;
  }
 
  onAddToCart(product: Product): void {
    this.cartService.addToCard({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id
    });
  }

}
