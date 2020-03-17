import { Component, OnInit } from '@angular/core';
import { weatherdayModel } from './weatherday/weatherday.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  dataWeeks: any[];
  constructor() {
    this.dataWeeks = [];
    this.dataWeeks.push(new weatherdayModel('Th2','mua','20','20'));
    this.dataWeeks.push(new weatherdayModel('Th2','mua','20','20'));
    this.dataWeeks.push(new weatherdayModel('Th2','mua','20','20'));
    this.dataWeeks.push(new weatherdayModel('Th2','mua','20','20'));
    this.dataWeeks.push(new weatherdayModel('Th2','mua','20','20'));
    this.dataWeeks.push(new weatherdayModel('Th2','mua','20','20'));
    this.dataWeeks.push(new weatherdayModel('Th3','nang','2','10'));

   }

  ngOnInit(): void {
  }

}
