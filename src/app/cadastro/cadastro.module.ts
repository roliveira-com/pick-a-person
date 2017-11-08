import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AngularFireDatabase} from 'angularfire2/database';

import {PessoaComponent} from './pessoa/pessoa.component';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AngularFireDatabase],
  declarations: [PessoaComponent, FormComponent, ListaComponent],
  exports: [PessoaComponent]
})
export class CadastroModule {}