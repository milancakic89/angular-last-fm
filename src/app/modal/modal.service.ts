import { EventEmitter, Injectable } from '@angular/core';
import { ApiURL } from '../shared/apiURL';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ModalService {

  modalEmiter = new EventEmitter<any>();

  constructor(private http: HttpClient, private apiUrl: ApiURL) { }

  fetchTracklist(artistName: string, albumName: string) {
    return this.http.get(this.apiUrl.structureArtistsAlbumURL(artistName, albumName))
  }
}