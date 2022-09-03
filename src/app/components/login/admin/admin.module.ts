import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './components/admin/admin.component';
import { MaterialModule } from "../../../material.module";
import { UserTableComponent } from './components/users-overivew/user-table/user-table.component';
import { UserSearchComponent } from './components/users-overivew/user-search/user-search.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { ManageUserPermissionComponent } from './components/manage-user-permission/manage-user-permission.component';
import { UsersOverivewComponent } from './components/users-overivew/users-overivew.component';
import { AdminMenuItemComponent } from './components/admin/admin-menu-item/admin-menu-item.component';
import { RouterOutlet } from "@angular/router";



@NgModule({
  declarations: [
    AdminComponent,
    UserTableComponent,
    UserSearchComponent,
    ManageUserComponent,
    ManageUserPermissionComponent,
    UsersOverivewComponent,
    AdminMenuItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterOutlet
  ]
})
export class AdminModule { }
