import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';

import {AngularFireAuth} from 'angularfire2/auth';
import {User} from 'firebase';

import {Pessoa} from '../cadastro/pessoa/pessoa.model';

@Injectable()
export class LoginService {

  logged: any = null;

  constructor(private firebaseAuth: AngularFireAuth){
    // @ToDo: Confirmar é necessário
    // define a propriedade logged atraves de um subscribe
    this.logged = this.firebaseAuth.authState.subscribe((user) => {
      this.logged = user;
    })

  }

  // efetua o login do usuário
  login(user: string, pass: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(user, pass)
      .then(ok => console.log(ok))
      .catch(erro => console.log(erro));
  }

  // Atualiza o profile de usuário com um displayName e uma photo, que é opcional
  updateUserProfile(name: string, photo?: string){
    this.firebaseAuth.auth.currentUser.updateProfile({
      displayName: name,
      photoURL: photo || 'none'
    }).then(ok => console.log(ok))
      .catch(erro => console.log(erro))

  }

  // Simples logout
  logout() {
    this.firebaseAuth.auth.signOut();
  }
  
  // @ToDo: Avaliar se é realmente necessário, caso contrário, deletá-lo
  // Retorna um simples booleano caso a propriedade logged seja definida
  isLogged(): boolean {
    return this.logged !== null;
  }

  // Retorna o observable em si para que outra classe possa fazer um subscribe
  loggedUser(): Observable<User>{
    return this.firebaseAuth.authState
  }
}
