import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { item } from '../cashier/cashier.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('items') items: item[]=[]
  @Output ('itemAdded') onAddItem : EventEmitter<item> = new EventEmitter<item>()

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item :item) : void{
    this.onAddItem.emit(item)
  }

}
