
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../login/login.component';

const APP_ROUTES: Routes = [
  { path: 'cadastro', loadChildren: '../cadastro/cadastro.module#CadastroModule'},
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRouteModule { }