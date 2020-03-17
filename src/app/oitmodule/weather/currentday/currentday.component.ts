import { Component, OnInit } from '@angular/core';
import { weatherdayModel } from '../weatherday/weatherday.model';
import { TimecurrentModel } from '../timecurrent/timecurrent.model';

@Component({
  selector: 'app-currentday',
  templateUrl: './currentday.component.html',
  styleUrls: ['./currentday.component.css']
})
export class CurrentdayComponent implements OnInit {
  
  dataWeeks: any[];

  constructor() {
    this.dataWeeks = [];
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','mua','20'));
    this.dataWeeks.push(new TimecurrentModel('12','nang','2'));
   }

  ngOnInit(): void {
  }

}
