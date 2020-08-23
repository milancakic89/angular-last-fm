import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiURL } from '../../shared/apiURL';
import { Rockstar } from '../../shared/rockstar.model';
import { Details } from '../../shared/details.model';

@Component({
  selector: 'app-rockstar-card',
  templateUrl: './rockstar-card.component.html',
  styleUrls: ['./rockstar-card.component.scss']
})
export class RockstarCardComponent {
  @Input() rockstar: Rockstar;

  details: Details;
  constructor(private http: HttpClient, private apiUrl: ApiURL) { }


  fetchDetails(): void {
    // request triggers on card hover and gets the details for individual card, only if there is no details allready
    if (!this.details) {
      this.http.get(this.apiUrl.structureRockstarDetails(this.rockstar.name))
        .subscribe((data: { artist: { bio: { summary: string } } }) => {
          let details: string = data.artist.bio.summary.slice(0, 300);
          details += '...';
          this.details = new Details(details);
        });
    }

  }

}
