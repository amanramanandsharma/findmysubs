import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ott-platform',
  templateUrl: './ott-platform.component.html',
  styleUrls: ['./ott-platform.component.scss']
})
export class OttPlatformComponent implements OnInit {

  constructor() { }

  @Input() data;

  listOfData = [
    {
      plan: 'Premium Ultra HD',
      amount: 899,
      due: '24th January 2022'
    }
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

  ngOnInit(): void {
    let daylist = this.getDaysArray(new Date("2021-12-01"),new Date("2021-12-31"));
    const xvalues = daylist.map((v)=>this.getFormattedDate(v));
    const yvalues = this.getValuesLength(xvalues.length);
    this.getOverallTrafficTrendOptions.xAxis.data = xvalues;
    this.getOverallTrafficTrendOptions.series[0].data = yvalues;

    console.log(this.data)
  }

  getDaysArray(start, end) {
    for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
        arr.push(new Date(dt));
    }
    return arr;
  }

  getFormattedDate(date){
    return date.toLocaleString('default', { month: 'short' }) + ' ' + date.getDate();
  }

  getValuesLength(len){
    const values = [];
    for(let index = 0;index<=len;index++){
      values.push(Math.floor(Math.random() * (240 - 15 + 1) + 15))
    }
    return values;
  }

}
