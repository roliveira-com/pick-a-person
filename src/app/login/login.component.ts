import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LoginService } from '../services/login.service';
import { Pessoa } from '../cadastro/pessoa/pessoa.model';

import 'rxjs/add/operator/do';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  displayNameForm: FormGroup;
  loginForm: FormGroup;
  currentUser: Pessoa;

  constructor(
    private form: FormBuilder,
    private loginService: LoginService
  ) { }

  ngOnInit() {

    this.loginForm = this.form.group({
      user: this.form.control('', [Validators.minLength(5)]),
      pass: this.form.control('', [Validators.minLength(5)])
    });

    this.displayNameForm = this.form.group({
      displayName: this.form.control('', [Validators.minLength(5)])
    });

  }

  login(user: string, pass: string) {
    this.loginService.login(user, pass);
  }

  logout() {
    this.loginService.logout();
  }

  logged(): boolean{
    return this.loginService.isLogged()
  }

  updateUserProfile(name: string){
    this.loginService.updateUserProfile(name);
    
  }

}
