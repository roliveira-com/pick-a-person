import { Injectable, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import { User } from 'firebase';

// @ToDo: Ainda preciso testar esta Classe
// Emite eventos cujo conteúdo é o Objeto User do firebase que contem 
// os dados do usuário que está logado ou undefined, caso não tenha ninguem logado
export class Session {
  state = new EventEmitter<User>()

  constructor(private auth: AngularFireAuth){

    this.auth.authState.subscribe(user => {
      this.state.emit(user || undefined);
    })

  }
}