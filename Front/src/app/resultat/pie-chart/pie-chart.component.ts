import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  @Input() dataS;

  public pieChartLabels ;
  public pieChartData ;
  public pieChartType = 'pie';

  constructor() { }

  ngOnInit() {
    console.log(this.dataS);
    this.pieChartData = this.dataS.data;
    this.pieChartLabels = this.dataS.labels;
  }

}
