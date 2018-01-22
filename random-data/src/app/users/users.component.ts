import { UserService } from './../services/user.service';
import { User } from './../models/user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersDetailComponent } from './users-detail/users-detail.component';
import { Subscription } from 'rxjs/Subscription';
import {  } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  users: any;
  subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private userService: UserService) {
   }
  ngOnInit() {
    this.userService.getUsers('')
      .subscribe(
       data => {
             this.users = data;
             console.log(this.users);
      });
      this.subscription = this.userService.refreshUsers.subscribe(
        () => {
            this.userService.getUsers('')
              .subscribe(
              data => {
                this.users = data;
                console.log(this.users);
              });
          }
      );
  }
ngOnDestroy() {
  this.subscription.unsubscribe();
}

}

