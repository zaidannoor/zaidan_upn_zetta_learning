import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public items : {title : string; price : number }[] = [
    {
      title: "Coffe Latte",
      price: 10000
    },
    {
      title: "Cappucino",
      price: 8000
    },
    {
      title: "Ice Tea",
      price: 5000
    },
    {
      title: "Chococino",
      price: 10000
    },
    {
      title: "Chocolatos",
      price: 10000
    },
    {
      title: "Cappucino Cincau",
      price: 12000
    },
  ]

  onClick(){
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
