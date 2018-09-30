import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/admin/pages/login/login.component';
import { HomeComponent } from './modules/admin/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'Entrar', pathMatch: 'full'  },
  // { path: 'Entrar', component: LoginComponent },
  {
    path: 'Entrar',
    loadChildren: './modules/admin/pages/login/login.module#LoginModule',
    data: {
      customLayout: true
    }
  },
  {
    path: 'Usuarios',
    loadChildren: './modules/admin/pages/login/login.module#LoginModule',
    data: {
      customLayout: true
    }
  },
  { 
    path: 'Admin', 
    loadChildren: './modules/admin/admin.module#AdminModule',
  }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}