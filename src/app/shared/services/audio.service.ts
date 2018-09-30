import { Injectable } from '@angular/core';
import { FireDbStorageService } from './fire-db-storage.service';
import { FireDbService } from './fire-db.service';
import { Observable } from 'rxjs';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class AudioService {

  constructor(private storage: FireDbStorageService, private db:FireDbService) { }
  private audios: Observable<any[]>;
  public url = {
    audio: '/audios',
  }

  public upload(name: string, file: File){
    return this.storage.upload(name, file).then(res=>{
      console.log(res);
      let fullPath = res.ref.fullPath;
      let data = {
        date_created: moment().format('DD/MM/YYYY HH:mm:ss'),
        path: fullPath,
        name: name,
        title: name
      };
      return this.db.insert(this.url.audio,data);
    }).catch(res => {
      console.log(res)
    })
  }

  public rm(uid: string){
    let fullPath = this.url.audio + '/' + uid;
    return this.db.delete(fullPath);
  }

  public update(name: string, uid:string){
    return this.db.set(this.url.audio + '/' + uid + '/title',name);
  }

  public list(){
    let data = this.db.listWatch(this.url.audio).valueChanges();
    return data;
  }

  public getAudios(): Observable<any[]> {
    if(!this.audios){
      this.audios = this.list();
    }
    return this.audios;
  }

  public download(name: string){
    return this.storage.download(name+'.mp3');
  }

  public getPercent():Observable<number>{
    return this.storage.uploadPercent;
  }
}
