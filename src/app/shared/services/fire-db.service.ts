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

  public insert(url,data){
    let list = this.db.list(url);
    return list.push(data);
  }

  public set(url,data){
    return this.db.object(url).set(data);
  }

  public delete(url){
    return this.db.object(url).remove();
  }

  public listWatch(url: string){
    return this.db.list(url);
    // this.db.list(url).snapshotChanges().pipe(
    //   res => {
    //     console.log(res);
    //     res.subscribe( obs => {
    //         console.log(obs);
    //     })
    //     return res
    //   }
    // )
  }

  ngInit(){
    // this.db.initializeApp(environment.firebase);
  }
}
