import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Pages/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Pages/home/home.module')
    .then(m => m.HomeModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  { path: 'auth', loadChildren: () => import('./Pages/auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
