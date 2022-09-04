import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../../service/http/user.service';
import { ActivatedRoute } from '@angular/router';
import { SnackbarService } from '../../../../../util/service/snackbar.service';
import { UnsubscribeService } from '../../../../../service/util/unsubscribe.service';
import { User } from '../../../../../models/entity/User';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, takeUntil } from 'rxjs';
import { PermissionEnum } from '../../../../../util/enums/PermissionEnum';
import { PermissionService } from '../../../../../service/http/permission.service';
import { Permission } from '../../../../../models/entity/Permission';

@Component({
  selector: 'app-manage-user-permission',
  templateUrl: './manage-user-permission.component.html',
  styleUrls: ['./manage-user-permission.component.scss'],
})
export class ManageUserPermissionComponent implements OnInit {
  usernameQueryParam$ = this.activatedRoute.queryParams.pipe(
    map((params) => params['username']),
    takeUntil(this.unsubscribeService.onDestroy$)
  );

  listOfPermissions: Observable<Permission[]> =
    this.permissionService.getPermissions();
  userForm = new FormGroup({
    permissions: new FormControl([] as Permission[], [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private snackBarService: SnackbarService,
    private unsubscribeService: UnsubscribeService,
    private permissionService: PermissionService
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
    this.userForm.controls.permissions.setValue(user.permissions || []);
  }

  updatePermissions() {
    this.usernameQueryParam$.subscribe((username: string) => {
      this.userService
        .updatePermissions(
          username,
          this.userForm.getRawValue().permissions || []
        )
        .subscribe(() => {});
    });
  }

  comparePermissions(
    comparablePermission: Permission,
    selectValue: Permission
  ): boolean {
    return comparablePermission.id === selectValue.id;
  }
}
