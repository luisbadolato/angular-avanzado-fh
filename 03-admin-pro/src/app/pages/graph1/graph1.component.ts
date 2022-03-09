import { Component } from '@angular/core';
import { Graph } from 'src/app/interfaces/graph.interface';

@Component({
  selector: 'app-graph1',
  templateUrl: './graph1.component.html',
  styles: [
  ]
})
export class Graph1Component  {

  public graph1: Graph = {
    title: 'Sales',
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    bgColors: ['amber-100', 'light-blue-100', 'deep-orange-100'],
    bgBorderColors: ['amber-200', 'light-blue-200', 'deep-orange-200'],
    hoverColors: ['amber-a200', 'light-blue-a200', 'deep-orange-a200'],
    hoverBorderColors: ['amber-a200', 'light-blue-a200', 'deep-orange-a200'],
    data: [15, 35, 20],
  };

  public graph2: Graph = {
    title: 'Rents',
    labels: ['Long-term Rents', 'Medium-Term Rents', 'Day-to-Day Rents'],
    bgColors: ['light-green-100', 'indigo-100', 'red-100'],
    bgBorderColors: ['light-green-200', 'indigo-200', 'red-200'],
    hoverColors: ['light-green-a200', 'indigo-a200', 'red-a200'],
    hoverBorderColors: ['light-green-a200', 'indigo-a200', 'red-a200'],
    data: [25, 65, 10],
  };

  public graph3: Graph = {
    title: 'Leases',
    labels: ['Long Leases', 'Short Leases'],
    bgColors: ['orange-100', 'green-100'],
    bgBorderColors: ['orange-200', 'green-200'],
    hoverColors: ['orange-a200', 'green-a200'],
    hoverBorderColors: ['orange-a200', 'green-a200'],
    data: [15, 35],
  };

  public graph4: Graph = {
    title: 'Imports',
    labels: ['One-time Imports', 'Recurring Imports', 'Voter File Imports', 'Ballot Imports', 'Donation Imports'],
    bgColors: ['yellow-100', 'light-green-100', 'deep-purple-100', 'blue-100', 'brown-100'],
    bgBorderColors: ['yellow-200', 'light-green-200', 'deep-purple-200', 'blue-200', 'brown-200'],
    hoverColors: ['yellow-a200', 'light-green-a200', 'deep-purple-a200', 'blue-a200', 'brown-300'],
    hoverBorderColors: ['yellow-a200', 'light-green-a200', 'deep-purple-a200', 'blue-a200', 'brown-300'],
    data: [15, 35, 20, 30, 30],
  };

}
