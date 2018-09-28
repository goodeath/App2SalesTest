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

  public list(){
    let data = this.db.listWatch(this.url.ticket).valueChanges();
    return data;
  }

  public getTickets(): Observable<any[]> {
    if(!this.tickets){
      this.tickets = this.list();
    }
    return this.tickets;
  }

}
