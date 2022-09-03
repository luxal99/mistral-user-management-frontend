import { Component, OnInit } from '@angular/core';
import { NavigationUrls } from '../../../../../util/constant/navigation-urls';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  USER_OVERVIEW = NavigationUrls.USER_OVERVIEW;
  MANAGE_USERS = NavigationUrls.MANAGE_USERS;
  constructor() {}

  ngOnInit(): void {}
}
