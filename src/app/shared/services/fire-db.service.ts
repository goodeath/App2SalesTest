import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2/index';
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  constructor(
      private db: AngularFireModule, 
     
  ) { }

  public authenticate(username: string, password: string){}

  ngInit(){
    // this.db.initializeApp(environment.firebase);
  }
}
