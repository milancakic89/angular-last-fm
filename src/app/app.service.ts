import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })

export class AppService {

  modalEmiter = new EventEmitter<any>();

  loadMorePosts: boolean = true;

  topRockStars: any[] = [];
  topRockAlbums: any[] = [];

  constructor(private http: HttpClient) { }

  saveRockStars(rockStars: any) {
    this.topRockStars = [...rockStars];
  }
  resetInfiniteScroll(){
    this.loadMorePosts = true;
  }
  checkForMorePosts() {
    return this.loadMorePosts;
  }

  loadMoreRockStars(amountToDisplay: number) {
    console.log('loadMoreRockStars: ' + amountToDisplay)
    if (amountToDisplay > this.topRockStars.length) {
      this.loadMorePosts = false;
      return this.topRockStars;
    }
    return this.topRockStars.slice(0, amountToDisplay);
  }
}