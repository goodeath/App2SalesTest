import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  public file;
  constructor() { }

  ngOnInit() {
  }

  public watchFile(event){
    console.log(event);
  }
  public save(){
    console.log(this.file);
  }
}
