import { environment } from '../../environments/environment';

export class ApiURL {
  static getRockstarURL(){
    return `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=rock&api_key=${environment.API_KEY}&format=json`;
  }
  static structureSearchURL(searchValue: string) {
    return `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchValue}&api_key=${environment.API_KEY}&format=json`;
  }
  static structureAlbumsURL(rockstar: string) {
    return `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${rockstar}&api_key=${environment.API_KEY}&format=json`;
  }
  static getTopAlbumsURL() {
    return `http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&api_key=${environment.API_KEY}&format=json`;
  }
  static structureArtistsAlbumURL(artist: string, album: string) {
    return `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${environment.API_KEY}&artist=${artist}&album=${album}&format=json`;
  }
  static structureRockstarDetails(rockstar: string) {
    return `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${rockstar}&api_key=${environment.API_KEY}&format=json`;
} 
}
