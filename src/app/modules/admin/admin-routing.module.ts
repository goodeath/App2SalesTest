import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AudioComponent } from './pages/audio/audio.component';
import { TicketComponent } from './pages/ticket/ticket.component';


const routes: Routes = [
    {
        path: 'Inicio',
        component: HomeComponent,data: {title:'Dashboard'}
    }, 
    {
        path: 'Usuarios',
        component: UserComponent,data: {title:'Usuários'}
    }, 
    {
        path: 'Audios',
        component: AudioComponent,data: {title:'Audio'}
    }, 
    {
        path: 'Ingressos',
        component: TicketComponent,data: {title:'Ingressos'}
    }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
