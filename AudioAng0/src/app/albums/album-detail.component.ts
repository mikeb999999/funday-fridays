import { Component, OnInit } from '@angular/core';
import { IAlbum } from './album';

@Component({
 // selector: 'app-album-detail',   // is only needed if nested as part of another component - doesn't apply to routing
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.sass']
})
export class AlbumDetailComponent implements OnInit {
  pageTitle: string = 'Album Detail';
  album: IAlbum;

  constructor() { }

  ngOnInit(): void {
  }

}
