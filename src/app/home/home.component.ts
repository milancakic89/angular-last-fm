import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('loadMore') loadMore: ElementRef;


  URL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${environment.API_KEY}&format=json`;

  loading: boolean = false;
  loadMorePosts: boolean = true;
  artists: any[] = [];
  displayLimit: number = 9;

  constructor(private service: AppService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.URL)
      .subscribe((artistsArray: { artists: { artist: any[] } }) => {
        let artists = artistsArray.artists.artist
        artists.sort((a, b) => {
          if (a.playcount > b.playcount) {
            return 1;
          } else if (b.playcount > a.playcount) {
            return -1;
          } else {
            return 0;
          }
        })
        this.service.saveRockStars(artists);
        this.artists = artists.splice(0, this.displayLimit);
      })
  }

  //listen view port for more items
  onScroll() {
    if (this.loadMore.nativeElement) {
      let elem = this.loadMore.nativeElement.getBoundingClientRect();
      if (elem.bottom <= (window.innerHeight + 20 || document.documentElement.clientHeight + 20) && !this.loading && this.loadMorePosts) {
        this.loadMorePosts = this.service.checkForMorePosts();
        if (this.loadMorePosts) {
          this.loading = true;
          this.displayLimit = this.displayLimit + 9;
          //show loading for a short period of time before showing
          setTimeout(() => {
            this.artists = this.service.loadMoreRockStars(this.displayLimit)
            this.loading = false;
          }, 300)
        }
      }
    }
  }

}