import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { CashierService, Item } from '../../cashier.service';

export interface Items {
  id: number;
  title: string;
  img: string;
  price: number;
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  public items: Observable<Item[]>;

  constructor(private cashierservice: CashierService) {
    
    this.items = this.cashierservice.items$;
    this.items.subscribe(console.log);
    console.log(this.items)
    console.log(this.cashierservice.items$)
    console.log('tes')

  }

  ngOnInit(): void {
  }

  addToPayment(item: Item): void {
    this.cashierservice.additem(item);
  }

}
