import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: 'promisefile', loadChildren: () => import('./promisefile/promisefile.module').then(m => m.PromiseFileModule) },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
