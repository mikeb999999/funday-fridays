// THE ANGULAR MODULE!!!  This is the starting point

import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AlbumListComponent } from './albums/album-list-component';

//The @NgModule decorator - contains arrays - defines this class as an angular module
@NgModule({
  declarations: [
    AppComponent,  /* all external components */
    AlbumListComponent /* 'aa-albums' is contained in Angular component, part of this module.. */
  ],
  imports: [
    BrowserModule   /*s.t. app runs correctly in the browser */
  ],
  providers: [],
  bootstrap: [ AppComponent  /* the starting componen for the app.*/ /*contains the directive used in the html file */ ]
})
// The class, obviously
export class AppModule { }
