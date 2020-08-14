import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-rockstar-details',
  templateUrl: './rockstar-details.component.html',
  styleUrls: ['./rockstar-details.component.scss']
})
export class RockstarDetailsComponent implements OnInit {

  rockstar: any;
  rockstarParam: string;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.rockstarParam = params.rockstar;
    })
    this.http.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.rockstarParam}&api_key=${environment.API_KEY}&format=json`)
      .subscribe((artistData: { topalbums: any }) => {
        this.rockstar = artistData.topalbums
        console.log(this.rockstar.album)
      })
  }

}
