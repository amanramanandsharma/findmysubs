import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  getOverAllConsupmtion  = {
    title: {
      text: 'Online Platform Contributors',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: 'bottom',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 78, name: 'Netflix' },
          { value: 10, name: 'Amazon Prime' },
          { value: 12, name: 'Hotstar' },
        ]
      }
    ]
  };

  ottPlatforms = [
    {
      link:'/analytics/netflix',
      image:'assets/Netflix_2015_logo.svg',
      data:[
        {
          plan: 'Premium Ultra HD',
          amount: 899,
          due: '24th January 2022',
          usage:78
        }
      ]
    },
    {
      link:'/analytics/amazon-prime',
      image:'assets/prime_logo.png',
      data:[
        {
          plan: 'Prime User',
          amount: 750,
          due: '30th January 2022',
          usage:10
        }
      ]
    },
    {
      link:'/analytics/hotstar',
      image:'assets/hotstar_logo.png',
      data:[
        {
          plan: 'Basic',
          amount: 1200,
          due: '15th January 2022',
          usage:12
        }
      ]
    },
    
  ]

  ngOnInit(): void {
  }

}
