import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './Pages/completed/completed.component';
import { HomeComponent } from './Pages/home/home.component';
import { UsersComponent } from './Pages/users/users.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'completed',
    component: CompletedComponent
  },
  {
    path:'users',
    component: UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
