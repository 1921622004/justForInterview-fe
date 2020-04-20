import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITagModel } from '../interfaces/tag';
import { IResponseBody } from '../interfaces/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  public tags: ITagModel[] = [];

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.getAllParentTags();
  }

  public getAllParentTags() {
    this.http.get<IResponseBody<ITagModel[]>>('/api/tag/allParent').subscribe((result) => {
      if (result && result.success) {
        this.tags = result.data;
      } else {
        this.snackBar.open(result ? result.message : '好像出了点错', null, { verticalPosition: 'top', duration: 2000 });
      }
    })
  }

  public getTagsByParentCode(tagCode: string) {
    const parentTag = this.tags.find((tag) => tag.tagCode === tagCode);
    if (parentTag && parentTag.children && parentTag.children.length > 0) return;
    this.http.get<IResponseBody<ITagModel[]>>(`/api/children/${tagCode}`).subscribe((result) => {
      if (result && result.success) {
        parentTag.children = result.data;
      } else {
        this.snackBar.open(result ? result.message : '好像出了点错', null, { verticalPosition: 'top', duration: 2000 });
      }
    })
  }
}
