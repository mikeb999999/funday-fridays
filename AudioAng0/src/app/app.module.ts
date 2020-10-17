// THE ANGULAR MODULE!!!  This is the starting point

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './albums/album-list-component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { TimesPipe } from './shared/times.pipe';
import { StarComponent } from './shared/star.component';

//The @NgModule decorator - contains arrays - defines this class as an angular module
@NgModule({
  // declarations = our directives, components and pipes
  declarations: [
    AppComponent,  /* all external components */
    AlbumListComponent, /* 'aa-albums' is contained in Angular component, part of this module.. */
    ConvertToSpacesPipe, TimesPipe,
    StarComponent
  ],
  // imports are for other sources (e.g. ng/3rd parties) directives, components and pipes
  imports: [
    BrowserModule,  /*s.t. app runs correctly in the browser */
    FormsModule     /* for ngModule etc. */
    ,HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent  /* the starting componen for the app.*/ /*contains the directive used in the html file */ ]
})
// The class, obviously
export class AppModule { }
