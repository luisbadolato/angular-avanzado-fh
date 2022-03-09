import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { Graph, assignColors } from 'src/app/interfaces/graph.interface';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent implements OnChanges {

  constructor () {}

  ngOnChanges(changes: SimpleChanges): void {
    
    const chartBgColors = assignColors(this.graph.bgColors!).length > 0 
                        ? assignColors(this.graph.bgColors!) 
                        : this.graph.bgColors;
    const chartHoverColors = assignColors(this.graph.hoverColors!).length > 0 
                        ? assignColors(this.graph.hoverColors!) 
                        : this.graph.hoverColors;
    const chartBgBorderColors = assignColors(this.graph.bgBorderColors!).length > 0 
                        ? assignColors(this.graph.bgBorderColors!) 
                        : this.graph.bgBorderColors;
    const chartHoverBorderColors = assignColors(this.graph.hoverBorderColors!).length > 0 
                        ? assignColors(this.graph.hoverBorderColors!) 
                        : this.graph.hoverBorderColors;

    this.doughnutChartData = {
      labels: this.graph.labels,
      datasets: [
        { 
          data: this.graph.data.length > 0 ? this.graph.data : this.doughnutChartData.datasets[0].data,
          backgroundColor: chartBgColors,
          hoverBackgroundColor: chartHoverColors,
          borderColor: chartBgBorderColors,
          hoverBorderColor: chartHoverBorderColors,
        }
      ]
    }

  }

  @Input() graph: Graph = {
    title: 'Untitled Graph',
    labels: ['Option 1', 'Option 2', 'Option 3'],
    data: [1,1,1],
    bgColors: ['green', 'blue', 'red'],
    hoverColors: ['red', 'green', 'blue'],
    bgBorderColors: ['green', 'blue', 'red'],
    hoverBorderColors: ['red', 'green', 'blue'],
  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.graph.labels,
    datasets: [{ data: [10, 30] }]
  };
  public doughnutChartType: ChartType = 'doughnut';

  


}

/* 

  DEFAULT DATASET 

 {
    data: [350, 450, 100],
    backgroundColor: ['#d33', '#3d3', '#33d'],
    hoverBackgroundColor: ['#f88', '#8f8', '#88f'],
    hoverBorderColor: ['#f00', '#0f0', '#00f']
  }

*/








