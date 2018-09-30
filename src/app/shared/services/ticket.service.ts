import { Injectable } from '@angular/core';
import { FireDbService } from './fire-db.service'
import { Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private url = {
     'ticket':'/tickets',
     'schedule':'/tickets_schedule',
     'sell' : '/tickets_sell/:id',
     'sellUser':'/tickets_sell_user/',
     'graph' : '/tickets_month_year'
  }

  private tickets;
  private schedules;


  constructor(private db: FireDbService) { }

  public create(name: string, initial_value: string, final_value: string, benefits: any[]){
    let data = {
      'name':name,
      'initial_value':initial_value,
      'final_value': final_value,
      'benefits': benefits,
      'date_created': moment().format('DD/MM/YYYY HH:mm:ss')
    };
    
    return this.db.insert(this.url.ticket,data).then(res=>{
      return res;
    })
  }

  public update(uid:string, name: string, initial_value: string, final_value: string, benefits: any[]){
 
    let basePath = this.url.ticket + '/' + uid + '/';
    let uris = {};
    uris[basePath + 'name'] = name;
    uris[basePath + 'initial_value'] = initial_value;
    uris[basePath + 'final_value'] = final_value;
    uris[basePath + 'benefits'] = benefits;
    
    return this.db.update(uris).then(res=>{
      return res;
    })
  }

  public createSchedule(ticketKey: string, data){
    return this.db.set(this.url.schedule + '/' + ticketKey, data).then(res=>{
      return res;
    })
  }

  public updateSchedule(ticketKey: string, data){
    return this.db.set(this.url.schedule + '/' + ticketKey, data).then(res=>{
      return res;
    })
  }

  public list(){
    let data = this.db.listWatch(this.url.ticket).valueChanges();
    return data;
  }

  public listSchedule(uid: string){
    let data2 = this.db.listWatch(this.url.schedule + '/' + uid).valueChanges();
    return data2;
  }

  public getTickets(): Observable<any[]> {
    if(!this.tickets){
      this.tickets = this.list();
    }
    return this.tickets;
  }

  public getSchedule(uid: string): Observable<any[]> {
    if(!this.schedules){
      this.schedules = this.listSchedule(uid);
    }
    return this.schedules;
  }

  public rm(uid: string){
    let uris = {};
    let fullPath = this.url.ticket + '/' + uid;
    
    let schedulePath = this.url.schedule + '/' + uid;
    uris[fullPath] = null;
    uris[schedulePath] = null;    

    return this.db.update(uris);
  }

}
