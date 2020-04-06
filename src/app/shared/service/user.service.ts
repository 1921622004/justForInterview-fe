import { Injectable } from '@angular/core';
import { IUserModel } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static user: IUserModel = null;
  public static getUser = () => {
    return UserService.user
  }
}
