import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../shared/services/user.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public data = {
    name: '',
    email: '',
    password: '',
  }
  public confirm_password  : string;

  public users:any[];

  constructor(private user: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.list();
  }

  

  public create(){
    // console.log(this.user.getUsers());
    if(this.data.password != this.confirm_password){
      this.toastr.error('Senhas não conferem');
      return ;
    }
    this.user.add(this.data).then(res=>{
      this.data = {
        name: '',
        email: '',
        password: '',
      };
      delete(this.confirm_password)
      this.toastr.success('Usuário criado com sucesso');
    })
  }

  public list(){
    console.log(this.user.getUsers());
    this.user.getUsers().subscribe(res=>{
      this.users = res;
      console.log(res);
    });
  }
}
