import { ITagModel } from './tag';

export interface IQuestionModel {
  title: string;
  content: string;
  originalContent: string;
  questionId: string;
  createdTime: string;
  answerCount: number;
  collectCount: number;
  tags?: ITagModel[];
}