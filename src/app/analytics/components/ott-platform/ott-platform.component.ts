import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-ott-platform',
  templateUrl: './ott-platform.component.html',
  styleUrls: ['./ott-platform.component.scss'],
})
export class OttPlatformComponent implements OnInit {
  constructor(private service: AppService) {}

  @Input() data;

  listOfData = [
    {
      plan: 'Premium Ultra HD',
      amount: 899,
      due: '24th January 2022',
    },
  ];

  getOverallTrafficTrendOptions = {
    tooltip: {
      trigger: 'axis',
      show: true,
      showDelay: 0,
      axisPointer: {
        show: false,
      },
    },
    grid: {
      left: '4%',
      right: '1%',
    },
    xAxis: {
      type: 'category',
      show: true,
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      name: 'Minutes Spent',
      nameLocation: 'middle',
      nameTextStyle: {
        fontSize: 16,
        lineHeight: 45,
      },
      type: 'value',
      show: true,
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        data: [25, 10, 32, 45, 5, 65, 125],
        type: 'line',
        areaStyle: {},
      },
    ],
  };

  movies = [
    'tt0111161',
    'tt0068646',
    'tt0468569',
    'tt0071562',
    'tt0050083',
    'tt10872600',
    'tt0167260',
    'tt0110912',
  ];

  moviesData = [];

  ngOnInit(): void {
    let daylist = this.getDaysArray(
      new Date('2021-12-01'),
      new Date('2021-12-31')
    );
    const xvalues = daylist.map((v) => this.getFormattedDate(v));
    const yvalues = this.getValuesLength(xvalues.length);
    this.getOverallTrafficTrendOptions.xAxis.data = xvalues;
    this.getOverallTrafficTrendOptions.series[0].data = yvalues;

    this.getDummyMovie();
  }

  getDaysArray(start, end) {
    for (
      var arr = [], dt = new Date(start);
      dt <= end;
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    return arr;
  }

  getFormattedDate(date) {
    return (
      date.toLocaleString('default', { month: 'short' }) + ' ' + date.getDate()
    );
  }

  getValuesLength(len) {
    const values = [];
    for (let index = 0; index <= len; index++) {
      values.push(Math.floor(Math.random() * (240 - 15 + 1) + 15));
    }
    return values;
  }

  getDummyMovie(): void {
    for (let index = 0; index < 3; index++) {
      let index = Math.floor(Math.random() * this.movies.length);
      let item = this.movies[index];
      this.movies.splice(index,1);

      this.service.getDummyMovie(item).subscribe(
        (data) => {
          this.moviesData.push(data)
        },
        (error) => {}
      );
    }
  }
}
