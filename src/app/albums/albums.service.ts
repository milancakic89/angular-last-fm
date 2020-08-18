
import { Injectable } from '@angular/core';
import { Album } from './../shared/album.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {


  albums: Album[] = [];
  constructor() { }

  storeAlbums(albums: Album[]) {
    this.albums = albums;
  }
  getAlbums() {
    return this.albums;
  }

}
