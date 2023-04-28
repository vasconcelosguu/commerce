import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent 

implements OnInit {

  @Output() columnsCountCHange = new EventEmitter<number>();
  @Output() itemCountChange = new EventEmitter<number>();
  @Output() sorteChange = new EventEmitter<string>();
  sort = 'desc';
  itemCount = 12;


  constructor() { }

  ngOnInit(): void {
  }

  sortHandler(newSort: string): void {
    this.sort = newSort;
    this.sorteChange.emit(newSort);
  }

  itemsHandler(itemCount: number): void{
    this.itemCount = itemCount;
    this.itemCountChange.emit(itemCount);
  }

  onColumnsUpdater(cols: number): void{
    this.columnsCountCHange.emit(cols)
  }

}
