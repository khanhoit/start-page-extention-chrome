import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OitmoduleModule } from './oitmodule/oitmodule.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OitmoduleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
