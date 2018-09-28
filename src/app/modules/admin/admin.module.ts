import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { BoxModule, BoxInfoModule as MkBoxInfoModule } from 'angular-admin-lte';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MomentModule } from 'ngx-moment';

import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AudioComponent } from './pages/audio/audio.component';

import { FireDbAuthService } from './../../shared/services/fire-db-auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { TicketComponent } from './pages/ticket/ticket.component';

@NgModule({
  imports: [
    MomentModule,
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    LoadingPageModule, MaterialBarModule,
    BoxModule, MkBoxInfoModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    AudioComponent,
    TicketComponent
  ],
  providers: [
    AngularFireDatabase,
    FireDbAuthService,
    AngularFireAuth,
    AngularFireStorage
  ]
})
export class AdminModule { }
