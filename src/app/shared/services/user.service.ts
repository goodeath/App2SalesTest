import { Injectable } from '@angular/core';
import { FireDbService } from './fire-db.service'
import { FireDbAuthService } from './fire-db-auth.service'
import { Observable } from 'rxjs';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private errors = {
    'auth/invalid-email' : 'E-mail inválido',
    'auth/weak-password' : 'Senha deve ter no mínimo 6 carácteres',
    "auth/email-already-in-use" : 'O e-mail utilizado já está em uso',
    'auth/operation-not-allowe' : 'Operação não permitida. Habilite-a no banco de dados',
  }
  private error: string;
  constructor(private db: FireDbService, private auth: FireDbAuthService) { }
    private users: Observable<any[]>;

    public url = {
      users: '/users',
    }

    public getErrors(code: string){
      return this.errors[code];
    }

    public getError(){
      let error = this.error;
      this.error = null;
      return error;
    }

    public setError(code: string){
      console.log(code,this.getErrors,this.errors[code])
      this.error = this.errors[code];
    }

    public add(data){
      data.date_created = moment().format('DD/MM/YYYY HH:mm:ss');
      return this.auth.createUser(data.email,data.password).then(res => {
         console.log(res);
         let uid = res.user.uid;
         data.key = uid;
         let fullUrl = this.url.users + '/' + uid;
         this.db.set(fullUrl,data);
        //  return true;
      }).catch(res=>{
        this.setError(res.code);
        console.log(res);
      })
    }

    public update(data, uid){
      return this.db.set(this.url.users + '/' + uid,data);
    }

    public rm(uid: string){
      let fullPath = this.url.users + '/' + uid;
      return this.db.delete(fullPath);
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
