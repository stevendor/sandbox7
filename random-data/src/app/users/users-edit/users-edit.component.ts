import { UserService } from './../../services/user.service';
import { User } from './../../models/user.model';
import { Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs/Observer';
import { Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  @ViewChild('f') editForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private userService: UserService) { }

  userDetail: User;
  sub: any;
  id: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const term = '/' + params['id'];
      this.userService.getUsers(term)
          .subscribe(
        (data: User) => {
        this.userDetail = data;
        console.log(this.userDetail);
      });
    });
  }
  onSubmit() {
    // this.updatedUser = this.editForm.value;
    this.id = this.editForm.controls.id.value;
    this.userService.updateUser(this.id, this.userDetail)
      .subscribe(res => {
        this.userService.refreshUsers.next();
        this.router.navigate(['/users']);
      }, (err) => {
        console.log(err);
      }
      );
  }
  onClear() {
    this.router.navigate(['/users']);
  }

}



