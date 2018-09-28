import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FireDbAuthService {

  private guest:boolean = true;

  constructor( private db: AngularFireAuth, private router: Router) { }

    public isGuest():boolean{
      return this.guest
    }

    public authenticate(username: string, password: string) : Promise<firebase.auth.UserCredential | IAuthError> {
      return this.db.auth.signInWithEmailAndPassword(username, password).then(
         res => {
           console.log(res);
           this.guest = false;
             return res;
         }
      ).catch( res => {

        let error: IAuthError = res;
        throw error;
        
      });
    }

    public createUser(email: string, password: string){
      return this.db.auth.createUserWithEmailAndPassword(email,password).then(
        res=>{
          console.log(res);
          return res;
        }
      ) 
    }

    public logout():void{
      this.guest = true;
      this.db.auth.signOut();
    }
}

export interface IAuthError {
  code: string, 
  message: string;
}
