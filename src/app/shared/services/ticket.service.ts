import { Injectable } from '@angular/core';
import { FireDbService } from './fire-db.service'
import { Observable } from 'rxjs';

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

  constructor(private db: FireDbService) { }

  public create(name: string, description: string, value: string, benefits: any[]){
    let data = {
      'name':name,
      'description':description,
      'value': value,
      'benefits': benefits
    };
    this.db.insert(this.url.ticket,data).then(res=>{
      return res;
    })
  }

}
