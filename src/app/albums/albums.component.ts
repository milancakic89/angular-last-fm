import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  albums: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&api_key=${environment.API_KEY}&format=json`)
      .subscribe((data: { albums: { album: any[] } }) => {
        this.albums = data.albums.album.splice(0, 9);
      })
  }

}
