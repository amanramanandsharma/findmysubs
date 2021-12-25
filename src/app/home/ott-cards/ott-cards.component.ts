import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ott-cards',
  templateUrl: './ott-cards.component.html',
  styleUrls: ['./ott-cards.component.scss']
})
export class OttCardsComponent implements OnInit {

  constructor() { }

  @Input() data;

  ngOnInit(): void {
  }

  getOTTClass(pt){
    if(pt< 25){
      return 'danger-ott';
    }else if(pt > 25 && pt < 70){
      return 'warning-ott';
    }else{
      return 'good-ott';
    }
  }

}
