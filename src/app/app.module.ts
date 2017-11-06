import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FirebaseConfigs } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';

import { AppComponent } from './app.component';
import { PessoaComponent } from './cadastro/pessoa/pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(FirebaseConfigs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
