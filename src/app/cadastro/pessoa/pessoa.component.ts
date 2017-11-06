import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pessoa } from './pessoa.model';

@Component({
  selector: 'cadastro-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoas: Array<Pessoa> = [];
  cadastroPessoaForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cadastroPessoaForm = this.fb.group({
      nome: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      sobrenome: this.fb.control('', [Validators.required])
    });
  }

  submit(pessoa: Pessoa) {
    // console.log(pessoa);
    this.pessoas.push(pessoa);
    // console.log(this.cadastroPessoaForm.value.nome);
  }

}
