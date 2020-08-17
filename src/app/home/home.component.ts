import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { fromEvent, from } from 'rxjs';
import { map, debounceTime, filter } from 'rxjs/operators';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { ApiURL } from '../shared/apiURL';
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

  loading: boolean = false;
  loadMorePosts: boolean = true;
  rockstars: Rockstar[] = [];
  displayLimit: number = 9;
  genre: string = 'rock';

  constructor(private service: AppService, private http: HttpClient, private window: Window) { }

  ngOnInit() {
    fromEvent(this.window, 'scroll')
      .pipe(
        map(event => this.window.innerHeight),
        debounceTime(200)
      ).subscribe((windowPositionY: number) => {

        let loadMoreElemY = this.loadMore.nativeElement.getBoundingClientRect().bottom;
        if (this.loadMore.nativeElement) {
          if ((loadMoreElemY - 100) <= (windowPositionY) && !this.loading && this.loadMorePosts) {
            this.loadMorePosts = this.service.checkForMorePosts();
            if (this.loadMorePosts) {
              this.loading = true;
              this.displayLimit = this.displayLimit + 9;
              this.rockstars = this.service.loadMoreRockStars(this.displayLimit)
              this.loading = false;
            }
          }
        }
      });

    this.http.get(ApiURL.getRockstarURL())
      .subscribe((artistsArray: { topartists: { artist: Rockstar[] } }) => {
        const rockstars: Rockstar[] = [];
        artistsArray.topartists.artist.forEach((rockstar: Rockstar) => {
          rockstars.push(new Rockstar(rockstar.name, rockstar['@attr'].rank, rockstar.image))
        })
        this.service.saveRockStars(rockstars);
        this.rockstars = this.service.loadMoreRockStars(this.displayLimit)
      })
  }
}