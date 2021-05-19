import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseTestComponent } from './promise-test/promise-test.component';

const routes: Routes = [
  { path: 'promisetest', component: PromiseTestComponent },
  // { path: 'test1', component: Test1Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromiseFileRoutingModule { }
