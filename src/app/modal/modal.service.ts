import { EventEmitter } from '@angular/core';
import { ApiURL } from '../shared/apiURL';
import { HttpClient } from '@angular/common/http';

export class ModalService{
  modalEmiter = new EventEmitter<any>();

  constructor(private http: HttpClient){}
  
  fetchTracklist(artistName: string, albumName: string){
    return this.http.get(ApiURL.structureArtistsAlbumURL(artistName, albumName))
  }
}