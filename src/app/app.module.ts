import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/admin/pages/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './modules/admin/components/header/header.component';
import { SidebarComponent } from './modules/admin/components/sidebar/sidebar.component';
import { FooterComponent } from './modules/admin/components/footer/footer.component';
import { MainComponent } from './modules/admin/template/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
