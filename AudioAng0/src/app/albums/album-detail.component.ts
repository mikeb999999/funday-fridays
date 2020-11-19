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
    let id = +this.route.snapshot.paramMap.get('id');   // N.B.  preceded with + for turn into number, Let new in ES2015 for block scoped var
    this.pageTitle += `: ${id}`;
    this.album = {
      "idAlbum": id,
      "strAlbum": "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
      "intYearReleased": 1972,
      "strMood": "Weird",
      "intScore": 9.7,
      "strAlbumThumb": "assets/images/utttwy1569246297.jpg",
      "strMusicBrainzID": "laksdlkjfahsdf"
    };
  }

  // Routing with code - e.g. do it when saving
  onBack(): void {
    this.router.navigate(['/albums']);   
  }


}
