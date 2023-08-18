// Inside your currentplan.component.ts

import { Component, OnInit, ElementRef } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-currentplan',
  template: `<div class="echarts-container" style="width: 313.92974853515625px; height: 284.36688232421875px; flex-shrink: 0; border-radius: 16.893px; background: #FFF; margin-top: 35px"></div>`
  
})
export class CurrentplanComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    const chart = echarts.init(this.elementRef.nativeElement.querySelector('.echarts-container'));

    const option = {
      title: {
        text: 'Current Plan'
      },
      xAxis: {
        type: 'value'
      },
      yAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5']
      },
      series: [
        {
          type: 'bar',
          data: [120, 200, 150, 80, 70],
          label: {
            show: true,
            position: 'right'
          }
        }
      ]
    };

    chart.setOption(option);
  }
}
