import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Main-components/header/header.component';
import { FooterComponent } from './Main-components/footer/footer.component';
import { HomeComponent } from './Pages/home/home.component';
import { FiatComponent } from './Pages/fiat/fiat.component';
import { FordComponent } from './Pages/ford/ford.component';
import { AudiComponent } from './Pages/audi/audi.component';
import { Pagina404Component } from './Pages/pagina404/pagina404.component';
import { DettaglioComponent } from './Pages/dettaglio/dettaglio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FiatComponent,
    FordComponent,
    AudiComponent,
    Pagina404Component,
    DettaglioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
