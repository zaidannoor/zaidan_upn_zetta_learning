import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello From Angular';
  dataPayment: { title: string; price: number; }[] = [];
  
  receiveMenu($event : any) { 
    this.dataPayment = $event;
    console.log(this.dataPayment)
  }

  // currentMsgFromChild1ToChild2 : any;
  // fwdMsgToSib2($event : any) { 
  //   this.currentMsgFromChild1ToChild2 = $event; 
  //   console.log('tes')
  //   console.log(this.currentMsgFromChild1ToChild2)
  // }
}
