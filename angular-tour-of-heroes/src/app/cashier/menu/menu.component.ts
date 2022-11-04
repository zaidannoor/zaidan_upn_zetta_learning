import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  
  public items : {id:number; title : string; img : string; price : number }[] = [
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
  ];




  public selectedItem : {id:number; title : string; img : string; price : number; amount:number }[] = [];

  @Output() sendData = new EventEmitter<any>();

  addToPayment(item: any){
    const duplicatedItemIndex = this.selectedItem.findIndex(({id}) => id === item.id)
    if (duplicatedItemIndex >= 0) {
        this.selectedItem[duplicatedItemIndex].amount+=1
    }else{
        this.selectedItem.push({...item, amount:1})
        this.sendData.emit(this.selectedItem)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
