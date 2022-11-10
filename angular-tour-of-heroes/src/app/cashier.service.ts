import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Item {
  id: number;
  title: string;
  img: string;
  price: number;
}

export interface SelectedItems {
  id: number;
  title: string;
  img: string;
  price: number;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})

export class CashierService {
  private items : BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([
    {
      id: 1,
      title: "Coffe Latte",
      img: "assets/img/coffe-latte.jpg",
      price: 10000
    },
    {
      id: 2,
      title: "Cappucino",
      img: "assets/img/cappucino.jpg",
      price: 8000
    },
    {
      id: 3,
      title: "Ice Tea",
      img: "assets/img/ice-tea.jpg",
      price: 5000
    },
    {
      id: 4,
      title: "Chococino",
      img: "assets/img/chococino.jpg",
      price: 10000
    },
    {
      id: 5,
      title: "Chocolatos",
      img: "assets/img/chocolatos.jpeg",
      price: 10000
    },
    {
      id: 6,
      title: "Cappucino Cincau",
      img: "assets/img/cincau.jpg",
      price: 12000
    },
  ]);


  private selectedItemSource: BehaviorSubject<SelectedItems[]> = new BehaviorSubject<SelectedItems[]>([]);
    
  public items$ = this.items.asObservable();
  
  public selectedItems$ = this.selectedItemSource.asObservable();


  constructor() {
    console.log(this.items.asObservable())
    console.log(this.items$)

   }

  additem(item: Item) {
    const selectedItem = this.selectedItemSource.value;
    const duplicatedItemIndex = selectedItem.findIndex(
      ({ id }) => id === item.id
    );
    if (duplicatedItemIndex >= 0) {
      this.selectedItemSource.next(
        selectedItem.map((selectedItem) => {
          return selectedItem.id === item.id
            ? { ...selectedItem, amount: selectedItem.amount + 1 }
            : selectedItem;
        })
      );
    } else {
      this.selectedItemSource.next([...selectedItem, { ...item, amount: 1 }]);
    }
  }

  removeItem(itemToBeRemoved: SelectedItems) {
    const selectedItems = this.selectedItemSource.value;
    const itemIndex = selectedItems.findIndex(
      ({ id }) => id === itemToBeRemoved.id
    );
    const itemref = selectedItems[itemIndex];
    if (itemref?.amount) {
      this.selectedItemSource.next(
        selectedItems.map((item) => {
          return item.id === itemToBeRemoved.id
            ? { ...item, amount: item.amount - 1 }
            : item;
        })
      );
    }
    if (itemref?.amount === 1) {
      this.selectedItemSource.next([
        ...selectedItems.slice(0, itemIndex),
        ...selectedItems.slice(itemIndex + 1),
      ]);
    }
  }

}
