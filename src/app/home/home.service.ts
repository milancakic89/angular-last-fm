import { ApiURL } from '../shared/apiURL';
import { HttpClient } from '@angular/common/http';
import { Rockstar } from '../shared/rockstar.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class HomeService {

  rockstars: Rockstar[] = [];
  loadMorePosts = true;

  constructor(private http: HttpClient,
    private apiUrl: ApiURL) { }
  fetchRockstars() {
    return this.http.get(this.apiUrl.getRockstarURL());
  }
  saveRockstars(rockstars: Rockstar[]) {
    this.rockstars = rockstars
  }

  resetInfiniteScroll() {
    this.loadMorePosts = true;
  }

  checkForMorePosts() {
    return this.loadMorePosts;
  }
  loadMoreRockStars(amountToDisplay: number) {
    if (this.rockstars.length > 0) {
      if (amountToDisplay > this.rockstars.length) {
        this.loadMorePosts = false;
        return this.rockstars;
      }
      return this.rockstars.slice(0, amountToDisplay);
    } else {
      return [];
    }
  }
}