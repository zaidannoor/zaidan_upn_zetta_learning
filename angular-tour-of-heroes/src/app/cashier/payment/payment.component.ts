import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input} from '@angular/core';
import { CashierService, SelectedItems } from '../../cashier.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  // @Input() public payments: any;
  public items: Observable<SelectedItems[]>;
  public total: Observable<number>;

  constructor(private CashierService: CashierService) { 
    this.items = this.CashierService.selectedItems$;
    this.total = this.CashierService.selectedItems$.pipe(
      map((items) =>
        items.reduce((total, item) => (total += item.amount * item.price), 0)
      )
    );
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.total = this.CashierService.selectedItems$.pipe(
      map((items) =>
        items.reduce((total, item) => (total += item.amount * item.price), 0)
      )
    );
    console.log(this.total)
  }

  removeItem(item: SelectedItems) {
    this.CashierService.removeItem(item);
  }

}
