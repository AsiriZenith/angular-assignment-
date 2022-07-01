import { Injectable } from '@angular/core';

const LOGGEDIN = 'loggedIn';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  public saveLogingStatus() {
    window.sessionStorage.removeItem(LOGGEDIN);
    window.sessionStorage.setItem(LOGGEDIN, 'true');
  }

  public getLogingStatus() {
    return sessionStorage.getItem(LOGGEDIN);
  }

  signOut() {
    window.sessionStorage.removeItem(LOGGEDIN);
  }
  
}
