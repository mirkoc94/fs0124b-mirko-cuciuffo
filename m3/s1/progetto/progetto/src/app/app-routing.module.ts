import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiComponent } from './Pages/audi/audi.component';
import { FiatComponent } from './Pages/fiat/fiat.component';
import { FordComponent } from './Pages/ford/ford.component';
import { HomeComponent } from './Pages/home/home.component';
import { Pagina404Component } from './Pages/pagina404/pagina404.component';
import { DettaglioComponent } from './Pages/dettaglio/dettaglio.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'fiat',
    component: FiatComponent
  },
  {
    path:'ford',
    component: FordComponent
  },
  {
    path:'audi',
    component: AudiComponent
  },
  {
    path:'dettaglio',
    component: DettaglioComponent
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
