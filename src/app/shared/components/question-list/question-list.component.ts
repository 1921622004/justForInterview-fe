import { Component, OnInit, Input } from '@angular/core';
import { IQuestionModel } from '../../interfaces/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  public ngOnInit() {
  }

  @Input()
  public questions: IQuestionModel[];

  @Input()
  public showTags: boolean;

}
