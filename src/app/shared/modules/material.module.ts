import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  imports: [
    MatChipsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    MatChipsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule {}