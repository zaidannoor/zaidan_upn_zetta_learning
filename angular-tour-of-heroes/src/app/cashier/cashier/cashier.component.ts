import { Component, OnInit } from '@angular/core';
export interface item {id : number , name : string , Harga : number}
export interface Selecteditem {id : number , name : string , Harga : number, amount : number}

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

  public items : item[] = [
    {id : 1 , name : 'Kopi Susu', Harga: 5000},
    {id : 2 , name : 'Es Teh', Harga: 3000},
    {id : 3 , name : 'Es Jeruk', Harga: 4000},
    {id : 4 , name : 'Teh Tarik', Harga: 5000},
    {id : 5 , name : 'Aqua', Harga:4000},
    {id : 6 , name : 'Jus Mangga', Harga: 10000},
    {id : 7 , name : 'Susu Cokelat', Harga: 6000},
    {id : 8 , name : 'Capucinno', Harga: 7000},
    {id : 9 , name : 'Drink Bengbeng', Harga: 6000},
    {id : 10 , name : 'Extra Joss Susu(Josua)', Harga: 6000}
  ]

  public selectedItems : Selecteditem[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item :item){
    const duplicated =this.selectedItems.findIndex(({id})   =>id=== item.id)

    if(duplicated>=0){
      this.selectedItems[duplicated].amount +=1
    }
    else{
      this.selectedItems.push({...item, amount: 1})
    }
  }

}
