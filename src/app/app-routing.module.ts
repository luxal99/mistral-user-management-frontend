import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/login/admin/components/admin/admin.component';
import { UsersOverivewComponent } from './components/login/admin/components/users-overivew/users-overivew.component';
import { ManageUserComponent } from './components/login/admin/components/manage-user/manage-user.component';
import {
  ManageUserPermissionComponent
} from "./components/login/admin/components/manage-user-permission/manage-user-permission.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'user-overview',
        component: UsersOverivewComponent,
      },
      {
        path: 'manage-users',
        component: ManageUserComponent,
      },
      {
        path: 'manage-permission',
        component: ManageUserPermissionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
