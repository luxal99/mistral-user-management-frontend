import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-user-confirmation-dialog',
  templateUrl: './user-confirmation-dialog.component.html',
  styleUrls: ['./user-confirmation-dialog.component.scss']
})
export class UserConfirmationDialogComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<UserConfirmationDialogComponent>) { }

  ngOnInit(): void {
  }

  confirm(){
    this.dialogRef.close(true)
  }

  decline(){
    this.dialogRef.close(false)
  }

}
