import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { QuestionListComponent } from './components/question-list/question-list.component';

@NgModule({
  declarations: [
    QuestionListComponent
  ],
  imports: [
    MaterialModule,
  ],
  exports: [
    MaterialModule,
  ]
})
export class SharedModule {}