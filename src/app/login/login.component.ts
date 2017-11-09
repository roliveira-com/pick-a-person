import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private form: FormBuilder,
    private auth: LoginService
  ) { }

  ngOnInit() {
    this.loginForm = this.form.group({
      user: this.form.control('', [Validators.minLength(5)]),
      pass: this.form.control('', [Validators.minLength(5)])
    });
  }

  login(user: string, pass: string) {
    this.auth.login(user, pass);
  }

  logout() {
    this.auth.logout();
  }

}
