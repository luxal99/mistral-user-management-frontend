import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private matSnackBar: MatSnackBar) {}

  open(message: string, action?: string) {
    return this.matSnackBar.open(message, action, {
      verticalPosition: 'top',
      horizontalPosition:'right',
      duration: 2000,
      panelClass:['user-management-snackbar']
    });
  }
}
