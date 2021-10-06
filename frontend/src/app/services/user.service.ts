import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
//import 'rxjs/add/operator/map'; <- outdated
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    /*
    return this.http.get('http://localhost:3000/requests/users')
      .map(res => res.json());
      */
      return this.http.get<User[]>('http://localhost:3000/requests/users');
  }
}
