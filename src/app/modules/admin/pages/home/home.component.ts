import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../shared/services/user.service';
import { AudioService } from './../../../../shared/services/audio.service';
import { TicketService } from './../../../../shared/services/ticket.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: any[] = null;
  public audios: any[] = null;
  public tickets: any[] = null;
  constructor(
    private user: UserService,
    private audio: AudioService,
    private ticket: TicketService) { }

  ngOnInit() {
    this.listUsers();
    this.listAudios();
    this.listTickets();
  }

  private listUsers():void{
    this.user.getUsers().subscribe(res=>{
      this.users = res;
    })
  }

  private listAudios():void{
    this.audio.getAudios().subscribe(res=>{
      this.audios = res;
    })
  }

  private listTickets():void{
    this.ticket.getTickets().subscribe(res=>{
      this.tickets = res;
    })
  }

}
