
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HomefooterComponent } from './user/homefooter/homefooter.component';
import { HomeheaderComponent } from './user/homeheader/homeheader.component';

import { HomeComponent } from './user/home/home.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomefooterComponent,
HomeheaderComponent
  ],
  imports: [
   RouterModule.forRoot(
      appRoutes,
       { useHash: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }