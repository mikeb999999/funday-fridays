import { Component } from '@angular/core';

@Component({
  selector: 'aa-root' /* the directive = custom html tag */,
  template: `
   <!-- <div> <h1>{{thePageTitle}}</h1><aa-albums></aa-albums></div>  <<<<<no longer needed bc now routing!>>>>>-->

    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/albums']">Album List</a></li>
      </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>  <!-- in host component's template to show where routed component should appear --> 
    </div>
  `,
  styles: []
})
export class AppComponent {
  pageTitle = "M's Audio Viewer";
}
