import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { WindowService } from './window.service';

const USER_KEY = 'auth-user';
const TIMER = 'timer';
const tokenExpirationDelay = environment.tokenExpirationDelay;
const TIME_TO_LOGIN = Date.now() + tokenExpirationDelay;

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(private windowService: WindowService) {}
  public saveUser(user: any): void {
    this.windowService.window.localStorage.removeItem(USER_KEY);
    this.windowService.window.localStorage.setItem(
      USER_KEY,
      JSON.stringify(user)
    );
  }

  public getUser(): any {
    const user = this.windowService.window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return false;
  }

  public saveTimer() {
    this.windowService.window.localStorage.removeItem(TIMER);
    this.windowService.window.localStorage.setItem(
      TIMER,
      JSON.stringify(TIME_TO_LOGIN)
    );
  }

  public getTimer() {
    return this.windowService.window.localStorage.getItem(TIMER);
  }
}
