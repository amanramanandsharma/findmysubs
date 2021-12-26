import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ott-management',
  templateUrl: './ott-management.component.html',
  styleUrls: ['./ott-management.component.scss']
})
export class OttManagementComponent implements OnInit {

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
