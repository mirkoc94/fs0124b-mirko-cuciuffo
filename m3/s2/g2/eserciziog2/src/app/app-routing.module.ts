import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ActivePostComponent } from './Pages/active-post/active-post.component';
import { InactivePostComponent } from './Pages/inactive-post/inactive-post.component';
import { Pagina404Component } from './Pages/pagina404/pagina404.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'active-post',
    component: ActivePostComponent
  },
  {
    path:'inactive-post',
    component: InactivePostComponent
  },
  {
    path:'**',
    component: Pagina404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
