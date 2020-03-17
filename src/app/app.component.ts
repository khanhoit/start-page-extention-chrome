import { Component, OnInit } from '@angular/core';
import { BackgroundServiceService } from './share/service/background-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataBackGround;
  constructor(public backgroundServiceService: BackgroundServiceService) {

  }
  ngOnInit(): void { 
    this.backgroundServiceService.getBackground(window.screen.width, window.screen.height).then(val => {
      // debugger;
    })
  }
  title = 'start-page-chrome';
}
