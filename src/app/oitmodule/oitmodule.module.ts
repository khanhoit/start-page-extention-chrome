import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterComponent } from './center/center.component';



@NgModule({
  declarations: [CenterComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CenterComponent
  ]
})
export class OitmoduleModule { }
