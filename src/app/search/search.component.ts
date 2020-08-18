import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { ApiURL } from '../shared/apiURL';
import { Track } from '../shared/track.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements AfterViewInit {
  @ViewChild('search') input: ElementRef
  delaySearch;
  showSearchDiv = false;
  searchValue = '';
  tracklist: Track[] = [];

  constructor(private http: HttpClient) { }

  ngAfterViewInit() {
    fromEvent<any>(this.input.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(600),
        distinctUntilChanged()
      ).subscribe(search => {
        this.searchValue = search;
        this.onSearch()
      })
  }
  onSearch() {
    if (this.searchValue !== '') {
      this.showSearchDiv = true;
      this.tracklist = [];
      this.http.get(ApiURL.structureSearchURL(this.searchValue))
        .subscribe((data: { results: { trackmatches: { track: Track[] } } }) => {
          const tracks = data.results.trackmatches.track;
          tracks.forEach((track: Track) => {
            this.tracklist.push(new Track(track.name, track.url));
          });
        }, (error) => {
          this.tracklist = [];
          throw new Error(error);
        });
    } else {
      this.showSearchDiv = false;
    }
  }

}

