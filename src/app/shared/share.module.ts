import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    QuestionListComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    QuestionListComponent
  ]
})
export class SharedModule {}