import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [

  //  path: '/login'     -> AuthRouting
  //  path: '/register'  -> AuthRouting

  //  path: '/dashboard' -> PagesRouting
  //  path: '/progress'  -> PagesRouting
  //  path: '/graph1'    -> PagesRouting

  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
