import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  @Input() dataS;
  public doughnutChartLabels ;
  public doughnutChartData ;
  public doughnutChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
    if (this.dataS) {
      this.doughnutChartData = this.dataS.nombreRepondantsParProposition;
      this.doughnutChartLabels = this.dataS.propositions;
    }
  }
}
