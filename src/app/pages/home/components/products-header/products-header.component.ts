import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent 

implements OnInit {

  @Output() columnsCountCHange = new EventEmitter<number>()
  sort = 'desc';
  itemCount = 12;


  constructor() { }

  ngOnInit(): void {
  }

  sortHandler(newSort: string): void {
    this.sort = newSort;
  }

  itemsHandler(itemCount: number): void{
    this.itemCount = itemCount;
  }

  onColumnsUpdater(cols: number): void{
    this.columnsCountCHange.emit(cols)
  }

}
