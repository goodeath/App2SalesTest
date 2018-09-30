import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Injectable({
  providedIn: 'root'
})
export class FireDbStorageService {

  constructor(private db: AngularFireStorage) { }

  public upload (name: string, file): Promise<any> {
    let ref = this.db.ref('audios/' + name + '.mp3');
    return ref.put(file).then((snapshot)=>{
      return snapshot;
    })
    
  }

  public download (name: string){
    return this.db.ref('audios/'+name).getDownloadURL();
  }
}
