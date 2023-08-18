import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-pnl', // Use 'app-pnl' as the selector
  template: `<div id="pnl-chart-container" style="width: 313.92974853515625px; height: 284.36688232421875px; flex-shrink: 0; border-radius: 16.893px; background: #FFF; margin-top: 35px"></div>`
})
export class PnLComponent implements OnInit {

  ngOnInit(): void {
    const chart = echarts.init(document.getElementById('pnl-chart-container'));

    const options: echarts.EChartsOption = {
      title: {
        text: 'P&L'
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          data: [
            { value: 335, name: 'Category A' },
            { value: 310, name: 'Category B' },
            { value: 234, name: 'Category C' },
            { value: 135, name: 'Category D' },
            { value: 1548, name: 'Category E' }
          ]
        }
      ]
    };

    chart.setOption(options);
  }
}
