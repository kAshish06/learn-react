import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loggedInUser: string;
  constructor() {}

  validateUserCredentials(user): boolean {
    if (user.username === 'Ashish' && user.password === 'kumar') {
      this.loggedInUser = user.username;
      return true;
    }
    return false;
  }

  getUser(): string {
    return this.loggedInUser;
  }
}
