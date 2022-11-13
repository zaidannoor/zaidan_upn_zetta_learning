import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CashierComponent } from 'src/app/cashier/cashier/cashier.component';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // items!: { id: number; name: string; img: string; price: number } | undefined;
  items!: any;
  param! : number
  
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.param = this.route.snapshot.params['id']

    let cashier = new CashierComponent;
    this.items = cashier.getItemById(this.param * 1)
    console.log((this.items))
  }

}
