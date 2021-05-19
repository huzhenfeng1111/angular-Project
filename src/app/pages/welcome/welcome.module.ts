import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { Test1Component } from './test1/test1.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent, Test1Component],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
