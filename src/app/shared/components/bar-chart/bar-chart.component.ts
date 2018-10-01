import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment'
import * as _ from 'lodash';
import { FireDbService } from '../../services/fire-db.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private db: FireDbService) { }
  public listData(){
    let $this = this;
    let year = moment().format("YYYY");
    this.db.listWatch('/tickets_sell').valueChanges().subscribe(res=>{
        console.log(res);
        console.log(_.keys(res[0]));
        let graph = {
          'keys': _.keys(res[0]),
          'values': _.values(res[0]),
        }
        let clone = JSON.parse(JSON.stringify(this.barChartLabels));
        clone[0] = graph.keys;
        
        this.barChartLabels = clone;
        this.randomize(graph.values);
    })
  }
  ngOnInit() {
    this.listData()
  }
  @Input()
  public customData: any;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['04', '05', '06', '07', '08', '09'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartColors = [{
    backgroundColor: '#3c8dbc',
    borderColor: '#1c8dbc',
    pointHoverBackgroundColor: '#ebf4f9',
  }]
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Faturamento em R$'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize(dat = []):void {
    // Only Change 3 values
   
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
      data = (dat) ? dat : data;
      console.log(dat,data);
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }

}
