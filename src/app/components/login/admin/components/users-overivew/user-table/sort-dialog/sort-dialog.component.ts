import { Component, OnInit } from '@angular/core';
import { UserSortEnum } from '../../../../../../../util/enums/UserSortEnum';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sort-dialog',
  templateUrl: './sort-dialog.component.html',
  styleUrls: ['./sort-dialog.component.scss'],
})
export class SortDialogComponent implements OnInit {
  orderByDirections = [
    { name: 'Ascending', value: 'ASC' },
    { name: 'Descending', value: 'DESC' },
  ];
  orderByProperties = Object.values(UserSortEnum).map((sortProperty) => {
    let sortPropertyName = sortProperty
      .split('.')[1]
      .split(/(?=[A-Z])/)
      .join(' ');
    return {
      sortPropertyValue: sortProperty,
      sortPropertyName:
        sortPropertyName[0].toUpperCase() +
        sortPropertyName.substring(1, sortProperty.length).toLowerCase(),
    };
  });

  sortForm = new FormGroup({
    sortProperty: new FormControl(''),
    orderDirection: new FormControl(''),
  });

  constructor(private dialogRef: MatDialogRef<SortDialogComponent>) {}

  ngOnInit(): void {}

  sort() {
    this.dialogRef.close(this.sortForm.getRawValue());
  }
}
