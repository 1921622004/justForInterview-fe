import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from "@angular/material/button";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';

@NgModule({
  imports: [
    MatChipsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule
  ],
  exports: [
    MatChipsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCardModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class MaterialModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('done', sanitizer.bypassSecurityTrustResourceUrl('assets/done.svg'))
      .addSvgIcon('clear', sanitizer.bypassSecurityTrustResourceUrl('assets/clear.svg'))
      .addSvgIcon('add', sanitizer.bypassSecurityTrustResourceUrl('assets/add.svg'))
      .addSvgIcon('account', sanitizer.bypassSecurityTrustResourceUrl('assets/account.svg'))
  }
}