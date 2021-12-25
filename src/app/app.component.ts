import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'findmysubs';

  ottPlatforms = [
    {
      image:'assets/Netflix_2015_logo.svg',
      data:[
        {
          plan: 'Premium Ultra HD',
          amount: 899,
          due: '24th January 2022'
        }
      ]
    },
    {
      image:'assets/prime_logo.png',
      data:[
        {
          plan: 'Prime User',
          amount: 750,
          due: '30th January 2022'
        }
      ]
    },
    {
      image:'assets/hotstar_logo.png',
      data:[
        {
          plan: 'Basic',
          amount: 1200,
          due: '15th January 2022'
        }
      ]
    },
  ]

  getOverallTrafficTrendOptions = {
    tooltip: {
      trigger: 'axis',
      show: true,
      showDelay: 0,
      axisPointer: {
        show: false,
      },
    },
    grid:{
      left:'4%',
      right:'1%',
    },
    xAxis: {
      type: 'category',
      show:true,
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      name:'Minutes Spent',
      nameLocation:'middle',
      nameTextStyle: {
        fontSize: 16,
        lineHeight: 45
      },
      type: 'value',
      show:true,
      axisTick:{
        show: false
      },
      axisLabel:{
        show: false
      }
    },
    series: [
      {
        data: [25, 10, 32, 45, 5, 65, 125],
        type: 'line',
        areaStyle: {}
      }
    ]
  };

}
