import { Component, OnInit } from '@angular/core';
import {OrmService, User} from '../shared/orm.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private user: User;

  constructor(private orm: OrmService) {
    this.user = this.orm.user;
    this.orm.userChanged.subscribe((user) => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

}
