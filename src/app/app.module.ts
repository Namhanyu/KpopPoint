import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { WebComponent } from './web/web.component';
import { PageNotFoundComponent } from './extrapage/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { WebModule } from './web/web.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    WebComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    WebModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
