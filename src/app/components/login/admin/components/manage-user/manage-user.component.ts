import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../../models/entity/User';
import { UserService } from '../../../../../service/http/user.service';
import { SnackbarService } from '../../../../../util/service/snackbar.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent implements OnInit {
  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });

  userInfoForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private activatedRoute:ActivatedRoute,
    private snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  save() {
    const user: User = {
      username: this.userForm.getRawValue().username,
      idUserInfo: this.userInfoForm.getRawValue(),
    };

    this.userService.save(user).subscribe((response) => {
      this.snackBarService.open('User created successfully');
    });
  }
}
