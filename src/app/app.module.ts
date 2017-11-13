import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirebaseConfigs } from './../environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';

import { ServicesModules } from './services/services.module';

import { CadastroModule } from './cadastro/cadastro.module';
import { LoginModule } from './login/login.module';
import { AppRouteModule } from './route/route.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    // PessoaComponent,
  ],
  imports: [
    BrowserModule,
    CadastroModule,
    LoginModule,
    ServicesModules,
    AppRouteModule,
    AngularFireModule.initializeApp(FirebaseConfigs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
