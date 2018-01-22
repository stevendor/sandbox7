import { User } from './../../models/user.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.css']
})
export class UsersNewComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  newUser: any;
  constructor(private router: Router, private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
  }
  onSubmit() {
    this.newUser = this.signupForm.value;

    this.userService.createUser(this.newUser)
        .subscribe(res => {
          this.userService.refreshUsers.next();
          this.router.navigate(['/users']);
        }, (err) => {
          console.log(err);
        }
      );
    console.log(this.newUser);
  }
}
