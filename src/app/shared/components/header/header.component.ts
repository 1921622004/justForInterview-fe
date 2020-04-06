import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { IUserModel } from '../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private user: IUserModel;

  ngOnInit(): void {
    this.user = UserService.getUser();
  }

}
