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

  remover(key: string){
    if(key !== undefined){
      this.pessoasRef.remove(key);
      console.log(key);
    }else{
      console.log('Item não removido! Key não encontrada');
    }
  }

}
