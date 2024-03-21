import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ActivePostComponent } from './Pages/active-post/active-post.component';
import { InactivePostComponent } from './Pages/inactive-post/inactive-post.component';
import { HomeComponent } from './Pages/home/home.component';
import { Pagina404Component } from './Pages/pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActivePostComponent,
    InactivePostComponent,
    HomeComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
