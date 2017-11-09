import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AngularFireAuth} from 'angularfire2/auth';


@Injectable()
export class LoginService {

  user: any;

  constructor(private firebaseAuth: AngularFireAuth){}

  login(user: string, pass: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(user, pass)
      .then(ok => console.log(ok))
      .catch(erro => console.log(erro));
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  // @ToDo
  // Trabalhar melhor neste médodo de chacagem de usuario autenticado.
  // Neste momento a propriedade user não altera de acordo com a autenticação
  // do usuário
  isLogged() {
    this.firebaseAuth.authState.subscribe(user => this.user = user);
  }
}
