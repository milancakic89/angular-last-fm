
import { Injectable } from '@angular/core';
import { Album } from './../shared/album.model';
import { ApiURL } from './../shared/apiURL';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AlbumService {


  albums: Album[] = [];
  constructor(private http: HttpClient) { }

  storeAlbums(albums: Album[]) {
    this.albums = albums;
  }
  getAlbums() {
    return  this.http.get(ApiURL.getTopAlbumsURL());
  }

}
