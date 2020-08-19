import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { HomeService } from './home.service';
import { HttpClient } from '@angular/common/http';
import { Rockstar } from '../shared/rockstar.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [{ provide: Window, useValue: window }]
})
export class HomeComponent implements OnInit {
  @ViewChild('loadMore') loadMore: ElementRef;
  @ViewChild('home') home: ElementRef;

  loading = false;
  loadMorePosts = true;
  rockstars: Rockstar[] = [];
  displayLimit: number = 9;
  genre = 'rock';


  constructor(private service: HomeService, private http: HttpClient, private window: Window) { }

  ngOnInit(): void {
    fromEvent(this.window, 'scroll')
      .pipe(
        map(event => this.window.innerHeight),
        debounceTime(200)
      ).subscribe((windowPositionY: number) => {

        const loadMoreElemY = this.loadMore.nativeElement.getBoundingClientRect().bottom;
        if (this.loadMore.nativeElement) {
          if ((loadMoreElemY - 100) <= (windowPositionY) && !this.loading && this.loadMorePosts) {
            this.loadMorePosts = this.service.checkForMorePosts();
            if (this.loadMorePosts) {
              this.loading = true;
              this.displayLimit = this.displayLimit + 9;
              this.rockstars = this.service.loadMoreRockStars(this.displayLimit);
              this.loading = false;
            }
          }
        }
      });
    this.service.fetchRockstars().subscribe((artistsArray: { topartists: { artist: Rockstar[] } }) => {
      const rockstars: Rockstar[] = [];
      artistsArray.topartists.artist.forEach((rockstar: Rockstar) => {
        rockstars.push(new Rockstar(rockstar.name, rockstar['@attr'].rank, rockstar.image));
      });
      this.rockstars = rockstars;
      this.service.saveRockstars(rockstars)
    });
}
}
