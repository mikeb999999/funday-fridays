import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IAlbum } from './album';
import { AlbumService } from './album.service';

@Component({
  // selector: 'app-album-detail',   // is only needed if nested as part of another component - doesn't apply to routing
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.sass']
})
export class AlbumDetailComponent implements OnInit {
  pageTitle: string = 'Album Detail';
  errorMessage = '';
  album: IAlbum | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService) { }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getAlbum(id);
    }
  }

  getAlbum(id: number): void {
    this.albumService.getAlbum(id).subscribe({
      next: album => this.album = album,
      error: err => this.errorMessage = err
    });
  }

  // Routing with code - e.g. do it when saving
  onBack(): void {
    this.router.navigate(['/albums']);
  }


}
