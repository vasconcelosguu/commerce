import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Cart, CartItem } from '../interfaces/cart.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] })

  constructor(private _snackBar: MatSnackBar) { }

  addToCard(item: CartItem):void {
    const items = [...this.cart.value.items];
    const itemInCart = items.find((_item) => _item.id === item.id)
    if (itemInCart) {
      itemInCart.quantity +=1;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('1 item adicionado ao carrinho!', 'Ok', {
      duration: 3000
    })
  }

  removeQuantity(item: CartItem): void{
    let itemForRemoval: CartItem | undefined;
    let filteredItems =  this.cart.value.items.map((_item) => {
      if(_item.id === item.id) {
        _item.quantity --;

        if(item.quantity === 0) {
          itemForRemoval = _item;
        }
      }
      return _item;
    })
    
    if(itemForRemoval) {
      filteredItems = this.removeFromCart(itemForRemoval, false);
    }
    this.cart.next({items:filteredItems})
    this._snackBar.open('1 Item foi removido!', 'Ok', {duration:3000})
  }

  getTotal(items: Array<CartItem>): number {
    return items.map(({price, quantity}) => price * quantity).reduce((acc, acr) => acc + acr, 0)
  }

  clearCart(): void{
    this.cart.next({ items: [] })
    this._snackBar.open('Carrinho vazio!!', 'Ok', {duration:3000})
  }

  removeFromCart(item: CartItem, update = true): Array<CartItem>{
    const filteredItem = this.cart.value.items.filter((_item) => _item.id !== item.id);

    if(update) {
      this.cart.next({ items: filteredItem })
      this._snackBar.open('Item removido!!', 'Ok', {duration:3000})
    }
    return filteredItem;
  }
}

