import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { MvComponent } from './mv/mv.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  

@NgModule({
  declarations: [MvComponent, NewsComponent, HomeComponent],
  imports: [
    CommonModule,
    WebRoutingModule,
    NgbModule
  ]
})
export class WebModule { }
