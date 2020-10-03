import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aa-albums',
  templateUrl: './album-list-component.html'
})
export class AlbumListComponent {
  pageTitle = 'Album List';
  albums: any[] = [
    {
      "Title": "ttl",
      "Sales": 1000,
      "Mood": "Happy",
      "Score(Put of 10)": 8.6,
      "Votes": 3
    },
    {
      "Title": "ttl2",
      "Sales": 10001,
      "Mood": "Pensive",
      "Score(Put of 10)": 6.3,
      "Votes": 4
    }
      ];
}
