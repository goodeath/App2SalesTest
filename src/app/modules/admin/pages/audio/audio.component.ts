import { Component, OnInit } from '@angular/core';
import { AudioService } from './../../../../shared/services/audio.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { LoadingService } from '../../../../shared/services/loading.service';

import * as types from 'gijgo'
@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {

  public file: File;
  public name: string;
  public audios: any[];
  public names: string[];
  public forbidden:boolean = true;
  public isNew:boolean = true;
  public fileMessage = 'Escolher arquivo de áudio (.mp3)';
  private id;
  constructor(
    private audio: AudioService, 
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private loading: LoadingService) { }

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
      this.name = (!this.name) ?  event.target.files[0].name : this.name;
    }
  }
  public save(){
    console.log(_,this.names);
    if(_.find(this.names, (o)=> {return o == this.name})){
      this.toastr.error("Há um arquivo com este nome. Por favor, escolha outro nome");
      return ;
    }
    
    let open = this.loading.open("Enviando arquivo de áudio");
    console.log(open);
    if(this.isNew){
      this.audio.upload(this.name,this.file).then(res=>{
        this.name = '';
        this.file = null;
        this.clearFile();
        open.finish();
        console.log(res);
      })
      let upt = 
      this.audio.getPercent().subscribe(res=>{
        console.log(res);
        let text = "Enviando arquivo de áudio... " + Math.round(res*100)/100 + '%';
        text = this.loading.getTemplate(text);
        // setTimeout(()=>{
          
        //   console.log(text);
        //   open.updateOption('loadingHtml', text);
        // },1000)
        setTimeout(()=>{
          open.updateOption('loadingHtml',text);
        },2000)
        

      })
    }
    else
      this.audio.update(this.name,this.id).then(res=>{
        console.log(res);
        open.finish();
        this.router.navigate(['/Admin/Audios']);
      });
    console.log(this.file);
  
  }

  public list(){
    let open = this.loading.open("Listando arquivos de áudio");
    console.log(this.audio.getAudios());
    this.audio.getAudios().subscribe(res=>{
      this.audios = res;
      if(!this.isNew){
        let data = _.find(this.audios,(o)=>o.key == this.id)
        this.name = data.name;
      }
      this.names = _.flatMap(this.audios,(o)=>o.name);
      console.log(this.names);
      open.finish();
      console.log(res);
    });
  }

  public getByName(audio){
    this.audio.download(audio.name).subscribe(res=>{
      audio.url = res;
    })
  }

  public rm(uid: string){
    let open = this.loading.open("Removendo arquivo de áudio");
    this.audio.rm(uid).then(res=>{
      console.log(res);
      open.finish();
    })
  }
}
