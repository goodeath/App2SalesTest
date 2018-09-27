import { Injectable } from '@angular/core';
import { FireDbService } from './fire-db.service'
import { FireDbAuthService } from './fire-db-auth.service'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: FireDbService, private auth: FireDbAuthService) { }
    private users: Observable<any[]>;

    public url = {
      users: '/users',
    }

    public add(data):void{
      this.auth.createUser(data.email,data.password).then(res => {
         console.log(res);
         let uid = res.user.uid;
         let fullUrl = this.url.users + '/' + uid;
         this.db.set(fullUrl,data);
      }).catch(res=>{
        console.log(res);
      })
     
    }

    public list(){
      let data = this.db.listWatch(this.url.users).valueChanges();
      return data;
    }

    public getUsers(): Observable<any[]> {
      if(!this.users){
        this.users = this.list();
      }
      return this.users;
    }
}
