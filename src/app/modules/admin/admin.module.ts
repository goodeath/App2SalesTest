import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { BoxModule, BoxInfoModule as MkBoxInfoModule } from 'angular-admin-lte';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MomentModule } from 'ngx-moment';
import { CurrencyMaskModule } from "ng2-currency-mask";

import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AudioComponent } from './pages/audio/audio.component';
import { BarChartComponent } from './../../shared/components/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FireDbAuthService } from './../../shared/services/fire-db-auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage';
import { TicketComponent } from './pages/ticket/ticket.component';
import { BsDatepickerModule, TimepickerModule } from 'ngx-bootstrap';
import { DonutChartComponent } from '../../shared/components/donut-chart/donut-chart.component';
import { LineChartComponent } from '../../shared/components/line-chart/line-chart.component';

@NgModule({
  imports: [
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ChartsModule,
    MomentModule,
    FormsModule,
    CommonModule,
    AdminRoutingModule,
    LoadingPageModule, MaterialBarModule,
    BoxModule, MkBoxInfoModule,
    CurrencyMaskModule,
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    AudioComponent,
    TicketComponent,
    BarChartComponent,
    DonutChartComponent,
    LineChartComponent,
  ],
  providers: [
    AngularFireDatabase,
    FireDbAuthService,
    AngularFireAuth,
    AngularFireStorage
  ]
})
export class AdminModule { }
