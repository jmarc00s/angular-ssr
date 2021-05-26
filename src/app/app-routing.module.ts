import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(c => c.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(c => c.LoginModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(c => c.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
