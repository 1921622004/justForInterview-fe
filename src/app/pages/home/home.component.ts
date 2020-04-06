import { Component, OnInit } from '@angular/core';
import { ITagModel } from 'src/app/shared/interfaces/tag';
import { IQuestionModel } from 'src/app/shared/interfaces/question';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tags: ITagModel[] = [];
  public questions: IQuestionModel[] = [];

  constructor() {
    this.tags = [{
      tagCode: 'java',
      tagName: 'JAVA',
      createTime: '2019-02-10'
    }, {
      tagCode: 'js',
      tagName: 'JAVASCRIPT',
      createTime: '2019-02-10'
    }];
    this.questions = [{
      title: 'string',
      content: 'string',
      originalContent: 'string',
      questionId: 'string',
      createdTime: 'string',
      answerCount: 10,
      collectCount: 0,
    }, {
      title: 'string',
      content: 'string',
      originalContent: 'string',
      questionId: 'string',
      createdTime: 'string',
      answerCount: 0,
      collectCount: 12,
    }]
  }

  ngOnInit(): void {
  }

}
