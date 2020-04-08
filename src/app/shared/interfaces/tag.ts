export interface ITagModel {
  tagName: string;
  tagCode: string;
  createTime: string;
  tagDescription: string;
  children?: ITagModel[];
}