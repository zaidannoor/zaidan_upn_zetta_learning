import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cashier Application';
  dataPayment: { title: string; img:string; price: number; }[] = [];
  
  receiveMenu($event : any) { 
    this.dataPayment = $event;
    console.log(this.dataPayment)
  }
}
