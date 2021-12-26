import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  
  ottPlatforms = [{
    link: '/analytics/netflix',
    image: 'assets/Netflix_2015_logo.svg',
    data: [
      {
        plan: 'Premium Ultra HD',
        amount: 899,
        due: '24th January 2022',
        usage: 78,
      },
    ],
  },
  {
    link: '/analytics/amazon-prime',
    image: 'assets/prime_logo.png',
    data: [
      {
        plan: 'Prime User',
        amount: 750,
        due: '30th January 2022',
        usage: 10,
      },
    ],
  },];

  index = 0;

  private duplicatePlatforms = [
  {
    link: '/analytics/hotstar',
    image: 'assets/hotstar_logo.png',
    data: [
      {
        plan: 'Basic',
        amount: 1200,
        due: '15th January 2022',
        usage: 12,
      },
    ],
  }
]

  getPlatformData (): any {
    return this.ottPlatforms;
  }

  setPlatformData():void {
    this.ottPlatforms.push(this.duplicatePlatforms[this.index]);
    this.index++;
    if(this.index == this.duplicatePlatforms.length) this.index = 0;
  }

}
