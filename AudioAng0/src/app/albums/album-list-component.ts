import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aa-albums',
  templateUrl: './album-list-component.html'
})
// There must be an import & a declaration for this class in app.module.ts 
export class AlbumListComponent {
  pageTitle: string = 'Album List';
  albums: any[] = [
    {
      "title": "Let's Dance",
      "sales": 1000,
      "mood": "Happy",
      "score": 8.6,
      "votes": 3
    },
    {
      "title": "Heroes",
      "sales": 10001,
      "mood": "Pensive",
      "score": 6.3,
      "votes": 4
    }
  ];
}
