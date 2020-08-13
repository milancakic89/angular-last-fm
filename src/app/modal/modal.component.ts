import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isModalOpened: boolean = false;
  artist: string;
  album: string;
  tracklist: any[] = [];

  constructor(private service: AppService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.service.modalEmiter.subscribe((album) => {
      this.isModalOpened = !this.isModalOpened;
      this.artist = album.artist.name;
      this.album = album.name;
      //albums dont have tracklist included, we need to fetch them manualy
      this.fetchTracklist();
    })
  }
  fetchTracklist() {
    this.http.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${environment.API_KEY}&artist=${this.artist}&album=${this.album}&format=json`)
      .subscribe((data: { album: { tracks: { track: any[] } } }) => {
        this.tracklist = data.album.tracks.track
      })
  }
  onRemoveModal() {
    this.isModalOpened = false;
  }
  onSelectTrack() {

  }
}
