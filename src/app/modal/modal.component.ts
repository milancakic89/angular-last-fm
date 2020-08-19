import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './modal.service';
import { HttpClient } from '@angular/common/http';
import { ApiURL } from '../shared/apiURL';
import { Track } from '../shared/track.model';
import { Album } from '../shared/album.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isModalOpened = false;
  album: Album;
  tracklist: Track[] = [];

  constructor(private service: ModalService) { }

  ngOnInit(): void {
    this.service.modalEmiter.subscribe((album: Album) => {
      this.isModalOpened = !this.isModalOpened;
      this.album = album;
      this.service.fetchTracklist(this.album.artist.name, this.album.name)
        .subscribe((data: { album: { tracks: { track: Track[] } } }) => {
          const tracks = data.album.tracks.track;
          tracks.forEach((track: Track) => {
            this.tracklist.push(new Track(track.name, track.url))
          });
        });;
    });
  }

  onRemoveModal() {
    this.isModalOpened = false;
  }
}
