import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IAlbum } from './album';

@Component({
 // selector: 'app-album-detail',   // is only needed if nested as part of another component - doesn't apply to routing
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.sass']
})
export class AlbumDetailComponent implements OnInit {
  pageTitle: string = 'Album Detail';
  album: IAlbum;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');   // N.B. not preceded with + for turn into number
    this.pageTitle += `: ${id}`;
    this.album = {
      "strAlbum": "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
      "intYearReleased": 1972,
      "strMood": "Weird",
      "intScore": 9.7,
      "strAlbumThumb": "assets/images/utttwy1569246297.jpg",
      "strMusicBrainzID": id
    };
  }

}
