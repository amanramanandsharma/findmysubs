import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }


  ottPlatforms = [
    {
      name:'netflix',
      image:'assets/Netflix_2015_logo.svg',
      data:[
        {
          plan: 'Premium Ultra HD',
          amount: 899,
          due: '24th January 2022'
        }
      ],
      movies:['tt1375666','tt0137523','tt0120737','tt0109830','tt0060196','tt0167261']
    },
    {
      name:'amazon-prime',
      image:'assets/prime_logo.png',
      data:[
        {
          plan: 'Prime User',
          amount: 750,
          due: '30th January 2022'
        }
      ],
      movies:[ 'tt0133093','tt0099685','tt0080684', 'tt0073486','tt6751668','tt0816692','tt0317248']
    },
    {
      name:'hotstar',
      image:'assets/hotstar_logo.png',
      data:[
        {
          plan: 'Basic',
          amount: 1200,
          due: '15th January 2022'
        }
      ],
      movies:['tt0245429','tt0120815','tt0120689','tt0118799','tt0114369','tt0102926','tt0076759','tt0056058']
    },
  ]

  ngOnInit(): void {
  }

}
