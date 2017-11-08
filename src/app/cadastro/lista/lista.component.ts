import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireAction, DatabaseSnapshot } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import {Pessoa} from '../pessoa/pessoa.model';

@Component({
  selector: 'cadastro-pessoa-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  pessoasRef: AngularFireList<Pessoa>;
  pessoas: Observable<Pessoa[]>;

  people: AngularFireAction<DatabaseSnapshot>[];

  constructor(private database: AngularFireDatabase) { 
    this.pessoasRef = database.list('pessoas');
    this.pessoas = this.pessoasRef.valueChanges();
  }

  ngOnInit() {
    //this.pessoas = this.database.list('pessoas').valueChanges();
  }

  log(key: string){
    console.log(key);
  }

  remover(pessoa: Pessoa){
    const message = `Deseja mesmo remover ${pessoa.nome} ${pessoa.sobrenome} ?`;
    if (window.confirm(message)){
      this.pessoasRef.remove(pessoa.id);
    }
  }

}
