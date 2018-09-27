import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../shared/services/user.service';
import { Observable } from 'rxjs';
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
    confirm_password: '',
  }

  public users:any[];

  constructor(private user: UserService) { }

  ngOnInit() {
    this.list();
  }

  public create(){
    // console.log(this.user.getUsers());
    this.user.add(this.data);
  }

  public list(){
    console.log(this.user.getUsers());
    this.user.getUsers().subscribe(res=>{
      this.users = res;
      console.log(res);
    });
  }
}
