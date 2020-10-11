import { Component, OnInit } from '@angular/core';
import { IAlbum } from './album';

@Component({
  selector: 'aa-albums',
  templateUrl: './album-list-component.html',
  styleUrls: ['./album-list.component.css']
})
// There must be an import & a declaration for this class in app.module.ts 
export class AlbumListComponent {
  pageTitle: string = 'Album List';
  imageWidth: number = 50;
  imageMargin = 2;
  showImage = false;
  listFilter = 'an';    // Use single quotes !!!!!
  albums: IAlbum[] = [
    {
      "title": "Let's Dance",
      "yearReleased": 1983,
      "mood": "Happy",
      "score": 8.6,
      "votes": 3,
      "imageUrl": "assets/images/lets-dance-4e3005ad5f70c.jpg"
    },
    {
      "title": "Heroes",
      "yearReleased": 1977,
      "mood": "Pensive",
      "score": 6.3,
      "votes": 4,
      "imageUrl": "assets/images/u3901-R-4753929-1413757634-2373.jpeg.jpg.jpg"
    },
    {
      "title": "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
      "yearReleased": 1972,
      "mood": "Weird",
      "score": 9.5,
      "votes": 6,
      "imageUrl": "assets/images/utttwy1569246297.jpg"
    }
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
