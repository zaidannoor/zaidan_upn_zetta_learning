import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { item } from '../cashier/cashier.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('items') items: item[]=[]
  @Output ('itemAdded') onAddItem : EventEmitter<item> = new EventEmitter<item>()
  @ViewChild('bgaq') bgaq?:ElementRef;
  @ViewChild('al') bgRed?:ElementRef;
  constructor() { }

  ngOnInit(): void {
    this.bgaq?.nativeElement.setAttribute('bgaq', '');
    this.bgRed?.nativeElement.setAttribute('coba', '');
  }

  addItem(item :item) : void{
    this.onAddItem.emit(item)
  }

}
