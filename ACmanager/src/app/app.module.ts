import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PrincipalViewComponent } from './principal-view/principal-view.component';

@NgModule({
  declarations: [
    PrincipalViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
})
export class AppModule { }
