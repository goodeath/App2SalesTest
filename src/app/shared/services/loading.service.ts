import { Injectable } from '@angular/core';
import * as wait from 'please-wait';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public message: string;

  constructor() { }

    public open(msg: string):any{
      
      let please = wait.pleaseWait({
        logo: "./assets/images/avatar-01.jpg",
        backgroundColor: '#005ad5',
        loadingHtml: "<p class='loading-message' style='color:#FFF'>"+msg+"</p><div class='sk-cube-grid '><div class='sk-cube-grid'>\
        <div class='sk-cube sk-cube1'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube2'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube3'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube4'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube5'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube6'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube7'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube8'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube9'  style='background-color:#FFF'></div>\
      </div></div>"
      })
      return please;
    }

    public changeMessage(msg: string, loading: any){
      this.message = msg;
    }

    public getTemplate(msg: string){
      return "<p class='loading-message' style='color:#FFF'>"+msg+"</p><div class='sk-cube-grid '><div class='sk-cube-grid'>\
        <div class='sk-cube sk-cube1'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube2'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube3'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube4'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube5'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube6'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube7'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube8'  style='background-color:#FFF'></div>\
        <div class='sk-cube sk-cube9'  style='background-color:#FFF'></div>\
      </div></div>";
    }

    public updateMessage(loading:any, msg:string){
      loading('loadingHtml',"<p class='loading-message' style='color:#FFF'>"+msg+"</p><div class='sk-cube-grid '><div class='sk-cube-grid'>\
      <div class='sk-cube sk-cube1'  style='background-color:#FFF'></div>\
      <div class='sk-cube sk-cube2'  style='background-color:#FFF'></div>\
      <div class='sk-cube sk-cube3'  style='background-color:#FFF'></div>\
      <div class='sk-cube sk-cube4'  style='background-color:#FFF'></div>\
      <div class='sk-cube sk-cube5'  style='background-color:#FFF'></div>\
      <div class='sk-cube sk-cube6'  style='background-color:#FFF'></div>\
      <div class='sk-cube sk-cube7'  style='background-color:#FFF'></div>\
      <div class='sk-cube sk-cube8'  style='background-color:#FFF'></div>\
      <div class='sk-cube sk-cube9'  style='background-color:#FFF'></div>\
      </div></div>");

    }
}
