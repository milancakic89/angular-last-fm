import { ApiURL } from './../shared/apiURL';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class AlbumService {

  constructor(private http: HttpClient, private apiUrl: ApiURL) { }

  getAlbums() {

    return this.http.get(this.apiUrl.getTopAlbumsURL());
  }
}
