import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { SearchService } from './search.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map, distinctUntilChanged } from 'rxjs/operators';
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

  constructor(private service: SearchService) { }

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
      this.service.onSearch(this.searchValue)
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

