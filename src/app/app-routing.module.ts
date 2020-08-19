import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: "", redirectTo: "/homepage", pathMatch: 'full' },
  { path: "homepage", component: HomepageComponent },
  { path: "pages", loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
