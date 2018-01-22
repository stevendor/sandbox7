import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
  groups: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/groups').subscribe(data => {
      console.log(data);
      this.groups = data;
    });
  }

}
