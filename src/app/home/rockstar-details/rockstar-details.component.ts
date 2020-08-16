import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiURL } from '../../shared/apiURL';
import { Album } from '../../shared/album.model';

@Component({
  selector: 'app-rockstar-details',
  templateUrl: './rockstar-details.component.html',
  styleUrls: ['./rockstar-details.component.scss']
})
export class RockstarDetailsComponent implements OnInit {

  rockstarAlbums: Album[] = [];
  rockstarParams: string;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.rockstarParams = params.rockstar;
    })
    this.http.get(ApiURL.structureAlbumsURL(this.rockstarParams))
      .subscribe((artistData: { topalbums: { album: Album[] } }) => {

        artistData.topalbums.album.forEach((album: Album) => {
          this.rockstarAlbums.push(new Album(album.name, album.image, album.artist,))
        })
  
      })
  }

}
