import { Component, OnInit,OnChanges,OnDestroy } from '@angular/core';
import { IAlbum } from './album';

@Component({
  selector: 'aa-albums',
  templateUrl: './album-list-component.html',
  styleUrls: ['./album-list.component.css']
})
// There must be an import & a declaration for this class in app.module.ts 
export class AlbumListComponent implements OnInit,OnChanges,OnDestroy{
  pageTitle = 'Album List';  // Use single quotes !!!!!
  imageWidth: number = 50;
  imageMargin = 2;
  showImage = false;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredAlbums = this.listFilter ? this.performFilter(this.listFilter) : this.albums;
  }

  filteredAlbums: IAlbum[];
  albums: IAlbum[] = [
    {
      "title": "Let's Dance",
      "yearReleased": 1983,
      "mood": "Happy",
      "score": 8.6,
      "imageUrl": "assets/images/lets-dance-4e3005ad5f70c.jpg",
      "musicBrainzID":"056e4f3e-d505"
    },
    {
      "title": "Heroes",
      "yearReleased": 1977,
      "mood": "Pensive",
      "score": 6.3,
      "imageUrl": "assets/images/u3901-R-4753929-1413757634-2373.jpeg.jpg.jpg",
      "musicBrainzID":"b585e56e-69cb"
    },
    {
      "title": "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
      "yearReleased": 1972,
      "mood": "Weird",
      "score": 9.7,
      "imageUrl": "assets/images/utttwy1569246297.jpg",
      "musicBrainzID":"bc49de56-46c7"
    }
  ];

  constructor() {
    this.filteredAlbums = this.albums;
    this.listFilter = 'an';
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IAlbum[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.albums.filter((album: IAlbum) =>
      album.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log('In OnInit :) ');
  }
  ngOnChanges(): void{
    console.log('In OnChanges : After change to input property...')
  }
  ngOnDestroy(): void {
    console.log('In Destroy : Performing cleanup.................')
  }

}
