import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiURL } from './shared/apiURL';
import { Rockstar } from './shared/rockstar.model';
import { Album } from './shared/album.model';

@Injectable({ providedIn: 'root' })

export class AppService {

  modalEmiter = new EventEmitter<any>();

  loadMorePosts = true;

  topRockStars: Rockstar[] = [];
  topRockAlbums: Album[] = [];

  constructor(private http: HttpClient) { }

  fetchRockstars() {
    return this.http.get(ApiURL.getRockstarURL());
  }
  saveRockStars(rockStars: any) {
    this.topRockStars = [...rockStars];
  }
  resetInfiniteScroll() {
    this.loadMorePosts = true;
  }
  checkForMorePosts() {
    return this.loadMorePosts;
  }

  loadMoreRockStars(amountToDisplay: number) {
    if(this.topRockStars.length > 0){
      if (amountToDisplay > this.topRockStars.length) {
            this.loadMorePosts = false;
              return this.topRockStars;
      }
    return this.topRockStars.slice(0, amountToDisplay);
    }else{
      return [];
    }
  }
}
