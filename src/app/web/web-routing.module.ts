import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MvComponent} from './mv/mv.component';
import {NewsComponent} from './news/news.component';
import {WebComponent} from './web.component'
import {HomeComponent} from './home/home.component';

const heroesRoutes: Routes = [
  {
    path: 'web',
    component: WebComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'mv',
        component: MvComponent
      },
      {
        path: 'news',
        component: NewsComponent
      },
      {
        path: '',
        redirectTo: '/web/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(heroesRoutes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
