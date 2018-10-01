import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutModule } from 'angular-admin-lte';   //Import the layout module.
import { CoreModule } from './core/core.module';
import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { BoxModule, BoxInfoModule as MkBoxInfoModule } from 'angular-admin-lte';
import { AdminModule } from './modules/admin/admin.module';
import { adminLteConf } from './admin-lte';   //Import the layout configuration.
import { AngularFireModule } from 'angularfire2/index';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';
 
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './modules/admin/components/header/header.component';
import { SidebarComponent } from './modules/admin/components/sidebar/sidebar.component';
import { FooterComponent } from './modules/admin/components/footer/footer.component';
import { MainComponent } from './modules/admin/template/main/main.component';
import { BarChartComponent } from './shared/components/bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent,


  ],
  imports: [
    
    BsDatepickerModule.forRoot(),
    ToastrModule.forRoot(), // Make toast through application.
    BrowserAnimationsModule, // Toastr Animations
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    LayoutModule.forRoot(adminLteConf),   //Provide the configuration to the layout module.
    LoadingPageModule, MaterialBarModule,
    BoxModule, MkBoxInfoModule,
    AdminModule,
    AngularFireModule.initializeApp(environment.firebase),
    ChartsModule
  ],
  providers: [BarChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
