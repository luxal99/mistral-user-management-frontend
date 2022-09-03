import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { User } from '../../../../../../models/entity/User';
import { MatDialog } from '@angular/material/dialog';
import { UserConfirmationDialogComponent } from './user-confirmation-dialog/user-confirmation-dialog.component';
import { UserService } from '../../../../../../service/http/user.service';
import { SnackbarService } from "../../../../../../util/service/snackbar.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnInit {
  @Input() listOfUsers: User[] = [];
  @Output() onUserDelete = new EventEmitter<void>()
  displayedColumns = [
    'firstName',
    'lastName',
    'email',
    'username',
    'status',
    'actions',
  ];

  constructor(private matDialog: MatDialog, private userService: UserService,private snackBarService:SnackbarService) {}

  ngOnInit(): void {}

  handleDeleteUser(id: number) {
    this.matDialog
      .open(UserConfirmationDialogComponent)
      .afterClosed()
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
          this.deleteUser(id);
        }
      });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(()=>{
      this.snackBarService.open('User deleted successfully','RELOAD')
        .afterDismissed().subscribe(()=>{
        this.onUserDelete.emit()
      })
    })
  }
}
