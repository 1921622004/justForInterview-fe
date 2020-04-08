export interface ITagModel {
  tagName: string;
  tagCode: string;
  createTime: string;
  children?: ITagModel[];
}