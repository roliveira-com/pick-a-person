import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pessoa } from './pessoa.model';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'cadastro-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor(private render: Renderer2, private auth: LoginService) { }

  ngOnInit() {

  }

  showBox(element: HTMLElement){
    this.render.setStyle(element,'height', '132px');
  }

  logged():boolean{
    return this.auth.isLogged();
  }

}
