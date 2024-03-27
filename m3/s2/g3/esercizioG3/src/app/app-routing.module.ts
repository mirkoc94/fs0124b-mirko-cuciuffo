import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CarrelloComponent } from './Pages/carrello/carrello.component';
import { PreferitiComponent } from './Pages/preferiti/preferiti.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'preferiti',
    component: PreferitiComponent
  },
  {
    path:'carrello',
    component: CarrelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
