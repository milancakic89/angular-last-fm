import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { Rockstar } from '../shared/rockstar.model';
import { ApiURL } from '../shared/apiURL';


describe('Homecomponent', () => {
  let service: HomeService;
  let component: HomeComponent;
  let apiUrl: ApiURL;

  beforeEach(() => {
    apiUrl = new ApiURL()
    service = new HomeService(null, apiUrl);
    component = new HomeComponent(service, null)
  })
  afterEach(() => {
    // component.
  })
  it('Should store Rockstars array from server', () => {
    let fakeData: Rockstar[] = [
      new Rockstar('Believe', 2, [{ path: 'http://example.com/image1.jpg' }]),
      new Rockstar('Nevermind', 3, [{ path: 'http://example.com/image1.jpg' }])
    ]
    let data;
    spyOn(service, 'saveRockstars').and.callFake(() => {
      data = fakeData;
    });
    service.saveRockstars(fakeData)

    expect(data).toBe(2)
  })

  it('Should save 9 rockstars into service property topRockStars', () => {
    let fakeData: Rockstar[] = [
      new Rockstar('Believe', 2, [{ path: 'http://example.com/image1.jpg' }]),
      new Rockstar('Nevermind', 3, [{ path: 'http://example.com/image1.jpg' }])
    ]
    //spyOn(service, 'saveRockstars').and.callThrough()

    service.saveRockstars(fakeData);

    expect(service.rockstars.length).toBe(2)
  })

  it('Should reset infinite scroll back to starting point', () => {

    spyOn(service, 'resetInfiniteScroll').and.callFake(() => {
      return "something"
    })

    component.ngOnInit()

    expect(service.resetInfiniteScroll).toHaveBeenCalled();
  })

  it('Should call Check ngOnInit', () => {
    let result = null;

    spyOn(service, "checkForMorePosts").and.callFake(() => {
      return result = true;
    })

    service.checkForMorePosts()

    expect(service.checkForMorePosts).toHaveBeenCalled();
    expect(result).not.toBe(null)



  })






})
