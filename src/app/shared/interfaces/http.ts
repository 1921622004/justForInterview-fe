export interface IResponseBody<T> {
  code: string;
  message: string;
  data: T;
}