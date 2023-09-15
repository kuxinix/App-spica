import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { AbsencesComponent } from './absences/absences.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SettingsComponent,
    UsersComponent,
    AbsencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
