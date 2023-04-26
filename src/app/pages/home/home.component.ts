import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cols = 3;
  category: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsUpdater(colNumber: number): void {
    this.cols = colNumber;
  }

  onShowCategory(newCategory: string):void {
    console.log(this.category)
    this.category = newCategory;
  }
 
}
