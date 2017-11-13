import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {AngularFireAuth} from 'angularfire2/auth';


@Injectable()
export class LoginService {

  logged: any = null;

  constructor(private firebaseAuth: AngularFireAuth){
    
    this.firebaseAuth.authState.subscribe((user) => {
      this.logged = user;
    })

  }

  login(user: string, pass: string) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(user, pass)
      .then(ok => console.log(ok))
      .catch(erro => console.log(erro));
  }

  logout() {
    this.firebaseAuth.auth.signOut();
  }

  isLogged(): boolean {
    return this.logged !== null;
  }
}
