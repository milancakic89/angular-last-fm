import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiURL } from '../shared/apiURL';
import { Album } from '../shared/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: Album[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(ApiURL.getTopAlbumsURL())
      .subscribe((data: { albums: { album: Album[] } }) => {
        const albums = data.albums.album.splice(0, 9);
        albums.forEach((album: Album) => {
          this.albums.push(new Album(album.name, album.image, album.artist))
        })
      })
  }
}
