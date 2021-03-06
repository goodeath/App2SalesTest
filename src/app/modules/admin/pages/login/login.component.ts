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

  private errors = {
    'auth/argument-error' : 'E-mail e senha precisam estar preenchidos',
    "auth/invalid-email" : 'E-mail inválido',
    "auth/user-not-found" : 'Usuário não encontrado. Por favor verifique seu e-mail e senha.',
    "auth/wrong-password" : 'Senha incorreta',
    "auth/user-disabled" : "Usuário foi cancelado",
  }

  ngOnInit() {
  }

  public authenticate(): void{
    
    try{
      this.auth.authenticate(this.email, this.password).then(res => {
         console.log('lol',res);
         this.router.navigate(['Admin/Inicio']);
      }).catch( res => {
        console.log('lol',res);
        this.toast.error(this.errors[res.code]);
         
        //  this.toast.error(res['code']);
      });
    }catch(e){
      console.log(e);
      this.toast.error(this.errors[e.code]);
    }
  }


}
