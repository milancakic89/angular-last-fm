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

  uri = `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=rock&api_key=${environment.API_KEY}&format=json`
  URL = `http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${environment.API_KEY}&format=json`;

  loading: boolean = false;
  loadMorePosts: boolean = true;
  artists: any[] = [];
  displayLimit: number = 9;

  constructor(private service: AppService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.uri)
      .subscribe((artistsArray: { topartists: { artist: any[] } }) => {
        let artists = artistsArray.topartists.artist
        this.service.saveRockStars(artists);
        this.artists = this.service.loadMoreRockStars(this.displayLimit)
        console.log(artists)
      })
  }
  //listen view port for more items
  onScroll() {
    console.log(this.loadMore.nativeElement)
    if (this.loadMore.nativeElement) {
      let elem = this.loadMore.nativeElement.getBoundingClientRect();
      if (elem.bottom <= (window.innerHeight + 40 || document.documentElement.clientHeight + 40) && !this.loading && this.loadMorePosts) {
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