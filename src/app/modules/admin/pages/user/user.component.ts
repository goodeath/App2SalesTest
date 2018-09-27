import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../shared/services/user.service';
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
  constructor(private user: UserService) { }

  ngOnInit() {
  }

  public create(){
    this.user.add(this.data);
  }
}
