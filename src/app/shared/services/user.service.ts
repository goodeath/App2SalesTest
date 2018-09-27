import { Injectable } from '@angular/core';
import { FireDbService } from './fire-db.service'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: FireDbService) { }

    public add(data):void{
      this.db.insert(data);
    }
}
