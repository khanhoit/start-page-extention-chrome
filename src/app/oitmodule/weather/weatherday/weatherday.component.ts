import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weatherday',
  templateUrl: './weatherday.component.html',
  styleUrls: ['./weatherday.component.css']
})
export class WeatherdayComponent implements OnInit {

  @Input('weatherdayModel') weatherdayModel:any;
  constructor() { }

  ngOnInit(): void {
  }

}
