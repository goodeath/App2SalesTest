import { Component, OnInit } from '@angular/core';
import { AudioService } from './../../../../shared/services/audio.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  public file: File;
  public name: string;
  public audios: any[];
  public forbidden:boolean = true;
  public isNew:boolean = true;
  public fileMessage = 'Escolher arquivo de áudio (.mp3)';
  private id;
  constructor(
    private audio: AudioService, 
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.isNew = false;
      this.id = id;
    }
    this.list();
  }

  private activeFile;
  public clearFile(){
    console.log(this.activeFile);
    // delete(this.activeFile.target.files[0]);
    this.fileMessage = 'Escolher arquivo de áudio (.mp3)';
  }

  public watchFile(event){
    console.log(event);
    if(event.target.files[0]){
      
      let type = event.target.files[0].type;
      if(type != 'audio/mp3'){
        this.toastr.error('Somente são aceitos arquivos .mp3');
        this.forbidden = true;
        this.fileMessage = 'Escolher arquivo de áudio (.mp3)';
      } else {
        this.forbidden = false;
        this.fileMessage = event.target.files[0].name;
        this.activeFile = event;
      }
      
      this.file = event.target.files[0];
    }
  }
  public save(){
    if(this.isNew)
      this.audio.upload(this.name,this.file).then(res=>{
        this.name = '';
        this.file = null;
        this.clearFile();
        console.log(res);
      })
    else
      this.audio.update(this.name,this.id).then(res=>{
        console.log(res);
        this.router.navigate(['/Admin/Audios']);
      });
    console.log(this.file);
  
  }

  public list(){
    console.log(this.audio.getAudios());
    this.audio.getAudios().subscribe(res=>{
      this.audios = res;
      if(!this.isNew){
        let data = _.find(this.audios,(o)=>o.key == this.id)
        this.name = data.name;
      }
      console.log(res);
    });
  }

  public getByName(audio){
    this.audio.download(audio.name).subscribe(res=>{
      audio.url = res;
    })
  }

  public rm(uid: string){
    this.audio.rm(uid).then(res=>{
      console.log(res);
    })
  }
}
