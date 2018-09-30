import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../shared/services/user.service';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
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
  public isNew: boolean = true;
  public id: string;
  public confirm_password  : string;
  public password: string;
  public users:any[];

  constructor(
    private user: UserService, 
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isNew = false;
      this.id = id;
    }
    this.list();
  }

  public save(){
    console.log(this.data,this.confirm_password);
    if(this.data.name == ''){
      this.toastr.error('Você precisa preencher o nome do usuário');
      return ;
    } else if(
      (this.isNew && this.password != this.confirm_password) ||
      (!this.isNew && ((this.password || this.confirm_password) && (this.password != this.confirm_password)))
    ){
      console.log(this.password,this.confirm_password)
      this.toastr.error('Senhas não conferem');
      return ;
    } else if (!this.isNew && this.password == '') {
      // delete(this.password);
    }

    if(this.password){
      this.data.password = this.password;
    }
    if(this.isNew)
      this.create();
    else
      this.update();
  }

  public update(){
    this.user.update(this.data,this.id).then(res=>{
      this.isNew = true;
      this.id = null;
      this.router.navigate(['/Admin/Usuarios']);
    })
  }

  public create(){
    // console.log(this.user.getUsers());
    
      
      this.user.add(this.data).then(res=>{
        let error= this.user.getError();
        console.log(error);
        if(error ){
          this.toastr.error(error);
          return ;
        } else {
          this.clear();
          this.toastr.success('Usuário criado com sucesso');
        }
      })
   
  }

  public clear(){
    this.data = {
      name: '',
      email: '',
      password: '',
    };
    delete(this.confirm_password)
    delete(this.password)
  }

  public list(){
    console.log(this.user.getUsers());
    this.user.getUsers().subscribe(res=>{
      this.users = res;
      if(!this.isNew)
        this.data = _.find(this.users,(o)=>o.key == this.id)
      delete(this.password);
      console.log(res);
    });
  }

  public rm(uid: string){
    this.user.rm(uid).then(res=>{
      console.log(res);
    })
  }
}
