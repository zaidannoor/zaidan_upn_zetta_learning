import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface User {
  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  position: string;
  isMarried: string;
  addresses: object;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    {
      id: 1,
      name: "Zaidan Noor",
      age: 19,
      gender: "male",
      email: "nkgnaeo@gmail.com",
      position: "CTO",
      isMarried: "already",
      addresses: {
        address: "Jatiasih",
        zipCode: 14421,
        city: "Bekasi",
        country: "Indonesia"
      }
    },
    {
      id: 2,
      name: "Faisal Bintang",
      age: 19,
      gender: "male",
      email: "nkgnaeo@gmail.com",
      position: "CTO",
      isMarried: "not",
      addresses: {
        address: "Jatiasih",
        zipCode: 14421,
        city: "Bekasi",
        country: "Indonesia"
      }
    },
  ])

  public users$ = this.users.asObservable();

  constructor() {
    
  }
}
