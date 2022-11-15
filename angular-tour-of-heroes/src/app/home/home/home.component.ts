import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users: Observable<User[]>;

  constructor(private userservice: UserService) { 
    this.users = this.userservice.users$
    console.log(this.users)
   }

  ngOnInit(): void {
  }

}
