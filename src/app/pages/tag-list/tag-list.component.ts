import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITagModel } from 'src/app/shared/interfaces/tag';
import { IResponseBody } from 'src/app/shared/interfaces/http';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {

  public tags:ITagModel[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.jsonp<IResponseBody<ITagModel[]>>('//www.fastmock.site/mock/4eff2417ca3286c1720b58fea41b7973/api/all', 'callback').subscribe((result) => {
      console.log(result.data );
      this.tags = result.data;
    })
  }

}
