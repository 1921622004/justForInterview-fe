import { Component, OnInit } from '@angular/core';
import { ITag } from 'src/app/shared/interfaces/tag';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public tags: ITag[] = [];

  constructor() { 
    this.tags = [{
      tagCode: 'java',
      tagName: 'JAVA',
      createTime: '2019-02-10'
    },{
      tagCode: 'js',
      tagName: 'JAVASCRIPT',
      createTime: '2019-02-10'
    }]
  }

  ngOnInit(): void {
  }

}
