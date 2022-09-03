import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../../../../models/entity/User';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  @Input() listOfUsers: User[] = [];
  displayedColumns = ['firstName', 'lastName', 'email', 'username', 'status'];

  constructor() {}

  ngOnInit(): void {}
}
