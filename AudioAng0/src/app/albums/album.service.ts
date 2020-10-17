import { Injectable } from '@angular/core';
import { IAlbum } from './album';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})
export class AlbumService {

  private albumUrl = 'api/albums/albums.json';    // TODO get data from Web - this is local Json file to keep things simple
                                                  // Added to Assets array in angular.json
                                                  // Simply point it to the real URl!
  //private albumUrl = 'https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=david_bowie'

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<IAlbum[]> {
    return this.http.get<IAlbum[]>(this.albumUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
