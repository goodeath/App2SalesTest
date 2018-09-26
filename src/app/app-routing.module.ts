import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/admin/pages/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'Entrar', pathMatch: 'full'  },
  { path: 'Entrar', component: LoginComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}