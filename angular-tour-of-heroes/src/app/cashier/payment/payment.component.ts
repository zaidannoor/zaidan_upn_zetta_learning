import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() public payments: any;


  
  removeItem(itemToBeRemoved: any){
    const itemIndex = this.payments.findIndex((payment: any) => payment.id ===itemToBeRemoved.id)
  
    if(this.payments[itemIndex].amount>1){
      this.payments[itemIndex].amount-=1
    }
    else{
      this.payments.splice(itemIndex,1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
