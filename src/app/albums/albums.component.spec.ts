import { AlbumsComponent } from './albums.component';
import { AlbumService } from './albums.service';
import { from, Observable } from 'rxjs';
import { Album } from '../shared/album.model';


describe('AlbumsComponent', () => {

  let service: AlbumService;


  beforeEach(() => {
    service = new AlbumService(null)

  })
  afterEach(() => {
    service.albums = [];
  })




  it('Should set Albums property with the items returned from server', () => {
    let fakeData: Album[] = [
      new Album('Believe', [], { name: 'Cher' }),
      new Album('Nevermind', [], { name: 'Nirvana' })
    ]

    service.storeAlbums(fakeData);

    expect(service.albums.length).toBe(2);

  })
  /*
    it('Should get Albums property from service', () => {
  
      spyOn(service, 'getAlbums').and.callFake(() => {
        return Observable;// stoped here, to be continue...
      })
  
      service.getAlbums();
  
      expect(service.albums.length).toBe(0);
  
    })*/


})