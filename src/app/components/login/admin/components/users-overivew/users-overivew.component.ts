import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../../../service/http/user.service";
import { UserQuery } from "../../../../../util/query/UserQuery";
import { User } from "../../../../../models/entity/User";

@Component({
  selector: "app-users-overivew",
  templateUrl: "./users-overivew.component.html",
  styleUrls: ["./users-overivew.component.scss"]
})
export class UsersOverivewComponent implements OnInit {

  listOfUsers: User[] | null = [];
  query: UserQuery = {
    page: 0
  };

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.userService.getUsers(this.query).subscribe((response) => {
      this.listOfUsers = response.body;
    });
  }

  onSearch(search:string){
    this.query.search=search
    this.getUsers()
  }

}
