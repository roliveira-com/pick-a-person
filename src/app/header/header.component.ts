import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services/login.service';
import { Pessoa } from '../cadastro/pessoa/pessoa.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUser: any;
  authorized: boolean;

  constructor(private auth: LoginService) { 

    this.auth.loggedUser().subscribe(user => {
      this.currentUser = user;
      this.currentUser ? this.authorized = true : this.authorized = false; 
    })

  }

  ngOnInit() {
  }

  logged(): boolean {
    return this.currentUser !== null || undefined;
  }

  logout(){
    this.auth.logout();
  }

}
