import { User } from './../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
    public refreshUsers = new Subject();
    constructor (private http: HttpClient) {
    }

  getUsers(urlPath: string) {
    return this.http.get('http://localhost:3000/users' + urlPath);
  }
  createUser(user: User) {
    return this.http.post('http://localhost:3000/users', user);
  }
  updateUser(urlPath: string, user: User) {
    return this.http.put('http://localhost:3000/users/' + urlPath, user);
  }
  deleteUser(urlPath: string, user: User) {
    return this.http.delete('http://localhost:3000/users/' + urlPath);
  }
}
