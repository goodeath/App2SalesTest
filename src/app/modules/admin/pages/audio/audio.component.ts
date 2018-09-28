import { Component, OnInit } from '@angular/core';
import { AudioService } from './../../../../shared/services/audio.service';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  public file: File;
  public name: string;
  public audios: any[];
  constructor(private audio: AudioService) { }

  ngOnInit() {
    this.list();
  }

  public watchFile(event){
    console.log(event);
    this.file = event.target.files[0];
  }
  public save(){
    this.audio.upload(this.name,this.file);
    console.log(this.file);
  
  }

  public list(){
    console.log(this.audio.getAudios());
    this.audio.getAudios().subscribe(res=>{
      this.audios = res;
      console.log(res);
    });
  }

  public getByName(audio){
    this.audio.download(audio.name).subscribe(res=>{
      audio.url = res;
    })
  }
}
