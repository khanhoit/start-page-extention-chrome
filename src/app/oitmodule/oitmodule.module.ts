import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterComponent } from './center/center.component';
import { WeatherComponent } from './weather/weather.component';
import { TodoComponent } from './todo/todo.component';
import { MultisearchComponent } from './multisearch/multisearch.component';
import { SettingComponent } from './setting/setting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherdayComponent } from './weather/weatherday/weatherday.component';
import { CurrentdayComponent } from './weather/currentday/currentday.component';
import { TimecurrentComponent } from './weather/timecurrent/timecurrent.component';

@NgModule({
  declarations: [
    CenterComponent, 
    WeatherComponent, 
    TodoComponent, 
    MultisearchComponent, 
    SettingComponent, WeatherdayComponent, CurrentdayComponent, TimecurrentComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports:[
    CenterComponent,
    WeatherComponent, 
    TodoComponent, 
    MultisearchComponent, 
    SettingComponent
  ]
})
export class OitmoduleModule { }
