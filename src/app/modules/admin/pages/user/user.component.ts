import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
