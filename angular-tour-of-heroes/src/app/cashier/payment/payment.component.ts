import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { Selecteditem } from '../cashier/cashier.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() items!: Selecteditem[];
  @Output () itemChanges : EventEmitter<Selecteditem[]> = new EventEmitter <Selecteditem[]>;
  @ViewChild('bgAqua') bgAqua?:ElementRef;
  @ViewChild('bgGreen') bgGreen?:ElementRef;
  public total :number = 0;

  constructor() { }

  ngOnInit(): void {
    this.bgAqua?.nativeElement.setAttribute('bgAqua', '');
    this.bgGreen?.nativeElement.setAttribute('bgGreen', '');
  }

  ngAfterContentChecked(): void {
    this.total = this.items.reduce((total, item) => total += item.amount * item.price , 0)
  }

  removeItem(itemToBeRemoved:Selecteditem){
    const itemIndex = this.items.findIndex(({id}) => id ===itemToBeRemoved.id)
  
    if(this.items[itemIndex].amount>1){
      this.items[itemIndex].amount-=1
    }
    else{
      this.items.splice(itemIndex,1);
    }
  }
}
