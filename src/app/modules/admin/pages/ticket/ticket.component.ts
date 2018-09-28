import { Component, OnInit } from '@angular/core';
import { TicketService } from './../../../../shared/services/ticket.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  public data = {
    name:'',
    initial_value: '',
    final_value: '',
  };
  public benefitName: string;
  public benefits = [];
  public scheduleItems = [];
  public scheduleData = {};
  public tickets: any[];
  private isCreated: boolean = false;
  private activeMenu: number = 1;
  private key: string;

  constructor(private ticket: TicketService) { }

  public getActiveMenu():number{
    return this.activeMenu;
  }

  public getIsCreated():boolean{
    return this.isCreated;
  }

  ngOnInit() {
    this.list();
  }
    copy(str1,str2){
      for(let x = 0;x < str1.length; x++){
         str2[x] = str1[x];
      }
      return str2;
    }

    public addBenefit(){
      // let benef = JSON.parse(JSON.stringify(this.benefits));
      // let s = benef[0].name;
      let len = this.benefits.length;
      // this.benefits.length += 1;
      // this.benefits[len] = {name:''}
      // this.benefit = this.benefits;
      this.benefits.push({name:this.benefitName});
      this.benefitName = '';
      // for(let x = 0;x<benef.length;x++){
      //   console.log(benef);
      //   let str = '';
      //   str = benef[x].name
      //   this.benefits[x] = {name: str}
      // }
      // this.benefits[0].name = s;
      // 
    }

    updateBenefit(item, value){
      console.log(item,value);
      console.log(this.benefits);
    }

    public remove(item,i){
      console.log(i,this.benefits);;
      this.benefits.splice(i,1);
      
    }

    private clear(){
      this.benefits = [];
      this.data = {
        name:'',
        initial_value: '',
        final_value: ''
      }
    }

    public create(){
      this.ticket.create(this.data.name,this.data.initial_value,this.data.final_value,this.benefits).then(ref=>{
        console.log(ref);
        this.isCreated = true;
        this.key = ref.key;
        this.clear();
      });
    }

    public choose(menu: number){
      this.activeMenu = menu;
    }

    public list(){
      console.log(this.ticket.getTickets());
      this.ticket.getTickets().subscribe(res=>{
        this.tickets = res;
        console.log(res);
      });
    }


    /**
     * Set properties to create new ticket.
     */
    public newTicket(): void{
      this.setNewTicketWindow();
    }

    public schedule(): void {
      this.setScheduleWindow()
    }

    public setScheduleWindow(){
      this.choose(2);
      this.isCreated = true;
    }

    public setNewTicketWindow(){
      this.choose(1);
      this.isCreated = false;
      this.key = null;
    }

    public addSchedule(){
      this.scheduleItems.push(this.scheduleData);
      this.scheduleData = {};
    }

    public createSchedule(){
      console.log(this.scheduleItems);
      let groupByDay = _.groupBy(this.scheduleItems,'day');
      this.ticket.createSchedule(this.key,groupByDay).then(res=>{
        this.setNewTicketWindow();
      });
      console.log(groupByDay);
    }
}