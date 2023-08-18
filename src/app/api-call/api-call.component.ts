import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-api-call',
  template: `
    <div id="chart-container" style="width: 653.199px; height: 316.745px; flex-shrink: 0; border-radius: 16.893px; background: #FFF;"></div>
  `
})
export class ApiCallComponent implements OnInit {

  ngOnInit(): void {
    const chart = echarts.init(document.getElementById('chart-container'));

    const options: echarts.EChartsOption = {
      title: {
        text: 'API Calls in last 6 hours'
      },
      xAxis: {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [120, 200, 150, 80, 70, 110],
        type: 'line',
        smooth: true // Enable smooth line
      }]
    };

    chart.setOption(options);
  }
}
