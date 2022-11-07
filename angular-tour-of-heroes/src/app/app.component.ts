import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  styles: [`[highlight]{background: #f5a95d}`,
  '[coba]{background: red; color: white}'
  ]
})
export class AppComponent {
  title = 'Angular Day 4';

  @ViewChild('el') bgGreen?:ElementRef;
  @ViewChild('al') bgRed?:ElementRef;

  ngAfterViewInit(){
    this.bgGreen?.nativeElement.setAttribute('highlight', '');
    this.bgRed?.nativeElement.setAttribute('coba', '');
   
  } 
}
