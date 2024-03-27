import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ActivePostComponent } from './Pages/active-post/active-post.component';
import { InactivePostComponent } from './Pages/inactive-post/inactive-post.component';
import { HomeComponent } from './Pages/home/home.component';
import { Pagina404Component } from './Pages/pagina404/pagina404.component';
import { SinglePostComponent } from './Components/single-post/single-post.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './Components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActivePostComponent,
    InactivePostComponent,
    HomeComponent,
    Pagina404Component,
    SinglePostComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
