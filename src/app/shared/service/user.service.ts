import { Injectable } from '@angular/core';

const TOKEN_KEY = 'TOKEN_KEY';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _token: string;

  constructor() {
    this._token = localStorage.getItem(TOKEN_KEY) || '';
  }

  public get token() {
    return this._token
  }

  public checkLogin(): boolean {
    return Boolean(this.token)
  }

  public set token(token: string) {
    this._token = token;
    localStorage.setItem(TOKEN_KEY, token);
  }
}
