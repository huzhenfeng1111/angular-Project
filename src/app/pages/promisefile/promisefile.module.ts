import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PromiseFileRoutingModule} from './promisefile-routing.module';
import { PromiseTestComponent } from './promise-test/promise-test.component';


@NgModule({
  imports: [PromiseFileRoutingModule,CommonModule],
  declarations: [PromiseTestComponent],
  exports: []
})
export class PromiseFileModule { }
