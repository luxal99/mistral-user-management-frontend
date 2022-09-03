import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { A11yModule } from "@angular/cdk/a11y";
import { CdkTableModule } from "@angular/cdk/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule } from "@angular/material/select";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTableModule } from "@angular/material/table";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  imports: [
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatSnackBarModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTooltipModule
  ],
  exports: [
    A11yModule,
    CdkTableModule,
    MatStepperModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatTableModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatSelectModule,
    MatIconModule,
    MatSnackBarModule,
    MatInputModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTooltipModule,
  ],
  declarations: [],
})
export class MaterialModule {}
