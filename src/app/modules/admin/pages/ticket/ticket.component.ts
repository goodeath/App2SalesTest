import { Component, OnInit } from '@angular/core';
import { TicketService } from './../../../../shared/services/ticket.service';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

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
  public isNew: boolean = true;
  public id: string;
  public benefitName: string;
  public benefits = [];
  public scheduleItems = [];
  public scheduleData = {};
  public tickets: any[];
  private isCreated: boolean = false;
  private activeMenu: number = 1;
  private key: string;

  constructor(
    private ticket: TicketService, 
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public getActiveMenu():number{
    return this.activeMenu;
  }

  public getIsCreated():boolean{
    return this.isCreated;
  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isNew = false;
      this.id = id;
    }
    this.list();
  }
    copy(str1,str2){
      for(let x = 0;x < str1.length; x++){
         str2[x] = str1[x];
      }
      return str2;
    }

    public addBenefit(){
      if(!this.benefitName){
        this.toastr.warning('O benefício está vazio');
        return;
      }
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
      if(this.isNew){
        this.ticket.create(this.data.name,this.data.initial_value,this.data.final_value,this.benefits).then(ref=>{
          console.log(ref);
          this.isCreated = true;
          this.key = ref.key;
          this.clear();
        });
      } else {
        this.ticket.update(this.id, this.data.name,this.data.initial_value,this.data.final_value,this.benefits).then(ref=>{
          console.log(ref);
          this.isCreated = true;
          // this.key = ref.key;
          this.clear();
        });
      }
    }

    public choose(menu: number){
      this.activeMenu = menu;
    }

    public list(){
      console.log(this.ticket.getTickets());
      this.ticket.getTickets().subscribe(res=>{
        this.tickets = res;
        if(!this.isNew){
          this.data = _.find(this.tickets,(o)=>o.key == this.id)
          this.benefits = this.data['benefits'];
        }
        console.log(res);
      });
    }

    public listSchedule(){
      console.log(this.ticket.getSchedule(this.id));
      this.ticket.getSchedule(this.id).subscribe(res=>{
        
        if(!this.isNew){
          this.scheduleItems = _.flattenDeep(res);
        }
        console.log(res,this.scheduleItems);
      });
    }

    


    /**
     * Set properties to create new ticket.
     */
    public newTicket(): void{
      this.setNewTicketWindow();
      if(!this.isNew){
        this.router.navigate(['/Admin/Ingressos']);
      }
    }

    public schedule(): void {
      this.setScheduleWindow()
    }

    public setScheduleWindow(){
      this.choose(2);
      this.isCreated = true;
      if(!this.isNew){
        this.listSchedule();
      }
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
      if(this.isNew){
        this.ticket.createSchedule(this.key,groupByDay).then(res=>{
          this.setNewTicketWindow();
        });
      } else {
        
        this.ticket.updateSchedule(this.id,groupByDay).then(res=>{
          this.setNewTicketWindow();
          this.router.navigate(['/Admin/Ingressos']);
        })
      }
      console.log(groupByDay);
    }

    public rm(uid: string){
      this.ticket.rm(uid).then(res=>{
        console.log(res);
      })
    }
}
