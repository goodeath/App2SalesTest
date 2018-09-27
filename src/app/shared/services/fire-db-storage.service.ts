import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class FireDbStorageService {

  constructor(private db: AngularFireStorage) { }

  public upload (name: string, file) {
    let ref = this.db.ref('audios/' + name + '.mp3');
    ref.put(file).then((snapshot)=>{
      console.log(snapshot);
    })

  }
}
