import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireDbAuthService } from './../../../../shared/services/fire-db-auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  ToastrModule
  constructor( private router: Router, private toast: ToastrService, private auth: FireDbAuthService) { }

  ngOnInit() {
  }

  public authenticate(): void{
    
    try{
      this.auth.authenticate(this.email, this.password).then(res => {
         console.log('lol',res);
         this.router.navigate(['Admin/Inicio']);
      }).catch( res => {
        console.log('lol',res);
        this.toast.error(res.message);
         
        //  this.toast.error(res['code']);
      });
    }catch(e){
      this.toast.error(e.message);
    }
  }


}
