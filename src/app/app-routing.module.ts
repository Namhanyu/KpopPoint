import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { WebComponent } from './web/web.component';
import { PageNotFoundComponent } from './extrapage/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'web', component: WebComponent },
  { path: 'admin', component: AdminComponent },
  { path: '',   redirectTo: '/web', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ]
})
export class AppRoutingModule { }
