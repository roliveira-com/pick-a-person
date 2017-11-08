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
    // Pegando a key que será usada para salvar este dado
    // para armazená-la junto com o objeto.
    // Lembrar que, o metodo push() tambem retorna uma promise
    // com a propriedade key do item que foi adicionado. Tipo isso:
    // this.firebase.list('pessoas').push({item}).then(reponse => console.log(response.key))
    pessoa.id = this.firebase.list('pessoas').push(null).key;
    this.firebase.list('pessoas').update(pessoa.id, pessoa)
      .then(() => console.log(`Dados Gravados: ${pessoa.id}`))
      .catch(erro => console.log(erro.message));
    this.cadastroPessoaForm.reset();
  }

}
