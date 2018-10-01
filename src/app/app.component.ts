import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { Router } from '@angular/router';
import { FireDbAuthService } from './shared/services/fire-db-auth.service';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout: boolean;

  constructor(
    private layoutService: LayoutService,
    private router: Router,
    private auth: FireDbAuthService,
  ) {}

  ngOnInit() {
    setTheme('bs3'); // or 'bs4'
    // if(this.auth.isGuest())
    //   this.router.navigate(['/Entrar']);
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.customLayout = value;
    });
  }
}
