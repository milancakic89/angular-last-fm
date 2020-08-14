import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-rockstar-card',
  templateUrl: './rockstar-card.component.html',
  styleUrls: ['./rockstar-card.component.scss']
})
export class RockstarCardComponent implements OnInit {
  @Input() rockStar: any;

  details;
  constructor(private http: HttpClient) { }



  ngOnInit(): void {
    //sendind request here would be triggered 9 times, once for each card on the page
  }
  fetchDetails() {
    //request triggers on card hover and gets the details for individual card, only if there is no details allready
    if (!this.details) {
      this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.rockStar.name}&api_key=${environment.API_KEY}&format=json`)
        .subscribe((data: { artist: { bio: { summary } } }) => {
          this.details = data.artist.bio.summary.slice(0, 300);
          this.details += '...';
        })
    }

  }

}
