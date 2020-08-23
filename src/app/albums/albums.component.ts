import { Component, OnInit } from '@angular/core';
import { AlbumService } from './albums.service';
import { AlbumData } from '../shared/albumData';

import { Album } from '../shared/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private service: AlbumService) { }

  ngOnInit(): void {
   this.service.getAlbums().subscribe((data: AlbumData) => {
      this.albums = data.albums.album.splice(0, 9); 
    });


  }

}
