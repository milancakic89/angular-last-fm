import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rockstar } from './shared/rockstar.model';
import { Album } from './shared/album.model';

@Injectable({ providedIn: 'root' })

export class AppService {

  modalEmiter = new EventEmitter<any>();

  topRockStars: Rockstar[] = [];
  topRockAlbums: Album[] = [];

  constructor(private http: HttpClient) { }

  
 



}
