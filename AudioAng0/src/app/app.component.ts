import { Component } from '@angular/core';

@Component({
  selector: 'aa-root' /* the directive = custom html tag */,
  template: `
    <div> <h1>{{thePageTitle}}</h1>

    <!-- Using the Album List Component as a _ custom directive_ thru the selector
    Ref: 'Using a Component as as Directive' in pt05 demo.... -->

      <aa-albums></aa-albums>   <!--<<<<<===============>>>>>-->

    </div>

    <div style="text-align:center" class="content">
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>-----------------------------------------------------------------------------</p>
    <span style="display: block">{{ thePageTitle }} app is running!</span>
      <img width="20" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
      <p>Getting started with Audio Viewer.</p>
      <p>'AudioAng0 - Audio Viewer (written in ng 10+, Q4 2020 -)'</p>
      <span class="fa fa-star"></span>
    </div>
  `,
  styles: []
})
export class AppComponent {
  thePageTitle = 'Audio Viewer';
}
