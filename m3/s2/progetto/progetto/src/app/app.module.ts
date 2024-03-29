import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './Components/list-item/list-item.component';
import { CardComponent } from './Components/card/card.component';
import { HomeComponent } from './Pages/home/home.component';
import { CompletedComponent } from './Pages/completed/completed.component';
import { UsersComponent } from './Pages/users/users.component';
import { FormsModule } from '@angular/forms';
import { MatchedUserComponent } from './Components/matched-user/matched-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    CardComponent,
    HomeComponent,
    CompletedComponent,
    UsersComponent,
    MatchedUserComponent
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
