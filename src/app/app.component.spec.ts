import { AppService } from './app.service';
import { Rockstar } from './shared/rockstar.model';

describe('AppService', () => {
  let component: AppService;

  beforeEach(() => {
    component = new AppService(null)
  })
  afterEach(() => {
    // component.
  })
  it('Should store Rockstars array from server', () => {
    let fakeData: Rockstar[] = [
      new Rockstar('Believe', 2, [{ path: 'http://example.com/image1.jpg' }]),
      new Rockstar('Nevermind', 3, [{ path: 'http://example.com/image1.jpg' }])
    ]
    component.saveRockStars(fakeData)

    expect(component.topRockStars.length).toBe(2)
  })

  it('Should save 9 rockstars into service property topRockStars', () => {
    let fakeData = [];

    for (let i = 0; i < 9; i++) {
      fakeData.push(new Rockstar('Believe', 2, [{ path: 'http://example.com/image1.jpg' }]))
    }
    spyOn(component, 'saveRockStars').and.callThrough()

    component.saveRockStars(fakeData);

    expect(component.topRockStars.length).toBe(9)
  })

  it('Should reset infinite scroll back to starting point', () => {
    component.loadMorePosts = false;

    component.resetInfiniteScroll()

    expect(component.loadMorePosts).toBe(true)
  })


})