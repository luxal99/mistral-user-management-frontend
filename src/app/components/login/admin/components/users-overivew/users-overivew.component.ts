import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../../service/http/user.service";

@Component({
  selector: 'app-users-overivew',
  templateUrl: './users-overivew.component.html',
  styleUrls: ['./users-overivew.component.scss']
})
export class UsersOverivewComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

}
