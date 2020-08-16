import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiURL } from '../shared/apiURL';
import { Track } from '../shared/track.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  delaySearch;
  showSearchDiv: boolean = false;
  searchValue: string = '';
  tracklist: Track[] = [];

  constructor(private http: HttpClient) { }

  onSearch(event) {
    this.searchValue = event.target.value;
    this.showSearchDiv = true;
//odraditi debounce
    clearTimeout(this.delaySearch);

    if (this.searchValue != '') {
      this.delaySearch = setTimeout(() => {
        this.tracklist = [];
        this.http.get(ApiURL.structureSearchURL(this.searchValue))
          .subscribe((data: { results: { trackmatches: { track: Track[] } } }) => {
            const tracks = data.results.trackmatches.track;
            tracks.forEach((track: Track) => {
              this.tracklist.push(new Track(track.name, track.url))
            })
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
