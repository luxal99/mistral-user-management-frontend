import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../../../models/entity/User';
import { UserService } from '../../../../../service/http/user.service';
import { SnackbarService } from '../../../../../util/service/snackbar.service';
import { ActivatedRoute } from '@angular/router';
import { UnsubscribeService } from '../../../../../service/util/unsubscribe.service';
import { map, takeUntil } from 'rxjs';
import { StatusEnum } from '../../../../../util/enums/StatusEnum';
import { UserInfo } from '../../../../../models/entity/UserInfo';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent implements OnInit {
  usernameQueryParam$ = this.activatedRoute.queryParams.pipe(
    map((params) => params['username']),
    takeUntil(this.unsubscribeService.onDestroy$)
  );

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
  });

  userInfoForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    status: new FormControl(''),
  });

  listOfUserStatus = Object.values(StatusEnum);

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private snackBarService: SnackbarService,
    private unsubscribeService: UnsubscribeService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.usernameQueryParam$.subscribe((username: string) => {
      this.userService.getUserByUsername(username).subscribe((userForEdit) => {
        this.setFormValue(userForEdit);
      });
    });
  }

  setFormValue(user: User) {
    this.userInfoForm.controls.firstName.setValue(
      user.idUserInfo?.firstName || ''
    );
    this.userInfoForm.controls.lastName.setValue(
      user.idUserInfo?.lastName || ''
    );
    this.userInfoForm.controls.email.setValue(user.idUserInfo?.email || '');
    this.userInfoForm.controls.status.setValue(user.idUserInfo?.status || '');
  }

  save() {
    const user: User = {
      username: this.userForm.getRawValue().username,
      idUserInfo: this.userInfoForm.getRawValue() as UserInfo,
    };

    this.userService.save(user).subscribe(() => {});
  }

  update() {
    this.usernameQueryParam$.subscribe((username: string) => {
      this.userService
        .update(username, this.userInfoForm.getRawValue() as UserInfo)
        .subscribe(() => {});
    });
  }
}
