import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireDbStorageService {

  public uploadPercent: Observable<number>;

  constructor(private db: AngularFireStorage) { }

  public upload (name: string, file): Promise<any> {
    let ref = this.db.ref('audios/' + name + '.mp3');
    let task =  ref.put(file)
    this.uploadPercent = task.percentageChanges();
    return task.then((snapshot)=>{
      return snapshot;
    })
    
  }

  public download (name: string){
    return this.db.ref('audios/'+name).getDownloadURL();
  }
}
