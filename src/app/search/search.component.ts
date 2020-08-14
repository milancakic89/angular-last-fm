import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {


  delaySearch;
  showSearchDiv: boolean = false;
  searchValue: string = '';
  tracklist: any[] = [];
  URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${this.searchValue}&api_key=${environment.API_KEY}&format=json`;

  constructor(private http: HttpClient) { }

  onSearch(event) {
    this.searchValue = event.target.value;
    this.showSearchDiv = true;

    clearTimeout(this.delaySearch);

    if (this.searchValue != '') {
      this.delaySearch = setTimeout(search => {
        this.http.get(this.URL)
          .subscribe((data: { results: { trackmatches: { track } } }) => {
            this.tracklist = data.results.trackmatches.track || [];
          }, (error) => {
            this.tracklist = [];
            throw new Error(error);
          });
      }, 600);
    } else {
      this.showSearchDiv = false;
    }

  }
}
