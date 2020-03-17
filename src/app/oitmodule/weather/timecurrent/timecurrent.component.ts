import { Component, OnInit, Input } from '@angular/core';
import { TimecurrentModel } from './timecurrent.model';

@Component({
  selector: 'app-timecurrent',
  templateUrl: './timecurrent.component.html',
  styleUrls: ['./timecurrent.component.css']
})
export class TimecurrentComponent implements OnInit {
  
  @Input('timecurrentModel') timecurrentModel:any;
  constructor() { }

  ngOnInit(): void {
  }

}
