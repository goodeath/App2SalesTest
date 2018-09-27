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
    AudioComponent
  ],
  providers: [
    AngularFireDatabase,
    FireDbAuthService,
    AngularFireAuth
  ]
})
export class AdminModule { }
