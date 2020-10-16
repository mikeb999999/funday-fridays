import { Injectable } from '@angular/core';
import { IAlbum } from './album';

@Injectable({
  providedIn:'root'
})
export class AlbumService {
  getAlbums(): IAlbum[] {
    return [
      {
        "title": "Let's Dance",
        "yearReleased": 1983,
        "mood": "Happy",
        "score": 8.6,
        "imageUrl": "assets/images/lets-dance-4e3005ad5f70c.jpg",
        "musicBrainzID": "056e4f3e-d505"
      },
      {
        "title": "Heroes",
        "yearReleased": 1977,
        "mood": "Pensive",
        "score": 6.3,
        "imageUrl": "assets/images/u3901-R-4753929-1413757634-2373.jpeg.jpg.jpg",
        "musicBrainzID": "b585e56e-69cb"
      },
      {
        "title": "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
        "yearReleased": 1972,
        "mood": "Weird",
        "score": 9.7,
        "imageUrl": "assets/images/utttwy1569246297.jpg",
        "musicBrainzID": "bc49de56-46c7"
      }
    ];
  }
}
