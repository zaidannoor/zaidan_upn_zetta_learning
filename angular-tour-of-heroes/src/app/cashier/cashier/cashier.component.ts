import { Component, OnInit } from '@angular/core';
export interface item {id : number , name : string , img:string, price : number}
export interface Selecteditem {id : number , name : string , img:string, price : number, amount : number}

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {

  public items : item[] = [
    {
      id: 1,
      name: "Coffe Latte",
      img: "assets/img/coffe-latte.jpg",
      price: 10000
    },
    {
      id: 2,
      name: "Cappucino",
      img: "assets/img/cappucino.jpg",
      price: 8000
    },
    {
      id: 3,
      name: "Ice Tea",
      img: "assets/img/ice-tea.jpg",
      price: 5000
    },
    {
      id: 4,
      name: "Chococino",
      img: "assets/img/chococino.jpg",
      price: 10000
    },
    {
      id: 5,
      name: "Chocolatos",
      img: "assets/img/chocolatos.jpeg",
      price: 10000
    },
    {
      id: 6,
      name: "Cappucino Cincau",
      img: "assets/img/cincau.jpg",
      price: 12000
    },
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
