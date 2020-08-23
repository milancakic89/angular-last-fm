import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ApiURL {
  getRockstarURL(){
    return `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=rock&api_key=${environment.API_KEY}&format=json`;
  }
  structureSearchURL(searchValue: string) {
    return `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchValue}&api_key=${environment.API_KEY}&format=json`;
  }
  structureAlbumsURL(rockstar: string) {
    return `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${rockstar}&api_key=${environment.API_KEY}&format=json`;
  }
  getTopAlbumsURL() {
    return `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&api_key=${environment.API_KEY}&format=json`;
  }
  structureArtistsAlbumURL(artist: string, album: string) {
    return `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${environment.API_KEY}&artist=${artist}&album=${album}&format=json`;
  }
  structureRockstarDetails(rockstar: string) {
    return `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${rockstar}&api_key=${environment.API_KEY}&format=json`;
} 
}
