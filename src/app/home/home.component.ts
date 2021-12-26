import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private srv: ServiceService) { }

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

  ottPlatforms = [];

  ngOnInit(): void {
    this.ottPlatforms = this.srv.getPlatformData();
  }

}
