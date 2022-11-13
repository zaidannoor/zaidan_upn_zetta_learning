import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  items!: { id: number; name: string; };
  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.items = {
      id: this.route.snapshot.params['id'],
      name: 'zaidan'
    }
  }

}
