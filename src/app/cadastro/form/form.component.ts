import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Pessoa } from '../pessoa/pessoa.model';

@Component({
  selector: 'pessoa-cadastro-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  //pessoas: Array<Pessoa> = [];
  cadastroPessoaForm: FormGroup;
  pessoasRef: AngularFireList<Pessoa>;

  constructor(
    private form: FormBuilder,
    private firebase: AngularFireDatabase
  ) { }

  ngOnInit() {
    this.cadastroPessoaForm = this.form.group({
      nome: this.form.control('', [Validators.required, Validators.minLength(5)]),
      sobrenome: this.form.control('', [Validators.required])
    });
  }

  submit(pessoa: Pessoa) {
    this.firebase.list('pessoas').push({
      nome: pessoa.nome,
      sobrenome: pessoa.sobrenome
    }).then(
      (t: any) => {
        this.firebase.list('pessoas').update(t.key,{
          id: t.key
        })
        console.log(`Dados Gravados: ${t.key}`);
      }),
    (e: any) => console.log(e.message);
    this.cadastroPessoaForm.reset(' ');
  }

}
