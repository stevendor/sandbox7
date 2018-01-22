import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component, OnInit, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {
  userDetail: User;
  sub: any;
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient,
      private userService: UserService) { }

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

  onDeleteUser(id, userDetail) {
    id = this.route.snapshot.params['id'];
    this.userService.deleteUser(id, this.userDetail)
      .subscribe(res => {
        this.userService.refreshUsers.next();
        this.router.navigate(['/users']);
      }, (err) => {
        console.log(err);
      }
      );
  }
}

