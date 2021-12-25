import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

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
      ]
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
      ]
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
      ]
    },
  ]

  finalObject = null;


  ngOnInit(): void {
    this.finalObject = this.ottPlatforms.filter(element => element.name === this.route.snapshot.paramMap.get('id'))
  }

}
