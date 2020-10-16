import { Component, OnInit,OnChanges,OnDestroy } from '@angular/core';
import { IAlbum } from './album';
import { AlbumService } from './album.service';

@Component({
  selector: 'aa-albums',
  templateUrl: './album-list-component.html',
  styleUrls: ['./album-list.component.css']
})
// There must be an import & a declaration for this class in app.module.ts 
export class AlbumListComponent implements OnInit{
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
  albums: IAlbum[] = [];

  constructor(private albumService: AlbumService) {}

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
    this.albums = this.albumService.getAlbums();
    this.filteredAlbums = this.albums;;
  }

}
