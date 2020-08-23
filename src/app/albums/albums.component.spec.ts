import { AlbumsComponent } from './albums.component';
import { AlbumService } from './albums.service';
import { of } from 'rxjs';
import { Album } from '../shared/album.model';



describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let service: AlbumService;
  let fakeData;
  let apiUrl: MockapiUrl;


  beforeEach(() => {
    apiUrl = new MockapiUrl()
    service = new AlbumService(null, apiUrl)
    component = new AlbumsComponent(service)

    fakeData = [
      new Album('Believe', [], { name: 'Cher' }),
      new Album('Nevermind', [], { name: 'Nirvana' })
    ]

  })
  afterEach(() => {
    component.albums = [];
  })


  it('Should get Albums on init', () => {

    spyOn(service, 'getAlbums').and.returnValue(of(fakeData));

    component.ngOnInit();

    expect(service.getAlbums).toHaveBeenCalled()
  })
  it('Should call gettopAlbums', () => {

    let result = spyOn(apiUrl, 'getTopAlbumsURL').and.callThrough();

    component.ngOnInit();

    expect(result).toBe('true')

  })


})

class MockapiUrl {
  getRockstarURL() {
    return 'true';
  }
  structureSearchURL(searchValue: string) {
    return 'true';
  }
  structureAlbumsURL(rockstar: string) {
    return 'true';
  }
  getTopAlbumsURL() {
    return 'true';
  }
  structureArtistsAlbumURL(artist: string, album: string) {
    return 'true';
  }
  structureRockstarDetails(rockstar: string) {
    return 'true';
  }
}
class MockService {
  constructor(private http, private apiUrl) { }

  getAlbums() {

    return true;
  }
}