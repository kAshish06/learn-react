import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  login() {
    let user = {
      username: this.loginForm.get('userName').value,
      password: this.loginForm.get('password').value,
    };
    let isUserValid = this.loginService.validateUserCredentials(user);
    if (isUserValid) {
      this.router.navigate(['/']);
    }
  }
}
