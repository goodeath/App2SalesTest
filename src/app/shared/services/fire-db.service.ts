import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  constructor(
      private db: AngularFireDatabase, 
     
  ) { }

  public insert(data){
    this.db.object('users/').set(data);
  }

  ngInit(){
    // this.db.initializeApp(environment.firebase);
  }
}
