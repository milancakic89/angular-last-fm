import { ApiURL } from './apiURL';


describe('ApiURL', () => {
  let apiUrl: ApiURL

  beforeEach(() => {
    apiUrl = new ApiURL()
  })

  it('Should return RockstarURL', () => {
    let url = null;


    url = apiUrl.getRockstarURL()

    expect(url).not.toBe(null)
  })

  it('Should return Search URL', () => {
    let url = null;
    let search = "Believe";

    apiUrl.structureSearchURL(search)

    expect(apiUrl.structureAlbumsURL).toHaveBeenCalled()
  })

  it('Should return Rockstar Album URL', () => {
    let url = null;
    let rockstarAlbum = "Californication"
    url = apiUrl.structureAlbumsURL(rockstarAlbum)

    expect(url).toContain(rockstarAlbum)
  })

  it('Should return top albums URL', () => {
    let url = null;

    url = apiUrl.getTopAlbumsURL()

    expect(url).not.toBe(null)
  })
  it('Should return top albums URL', () => {
    let url = null;
    let artist = "RHCP";
    let album = "Californication"

    url = apiUrl.structureArtistsAlbumURL(artist, album)

    expect(url).not.toBe(null)
  })
  it('Should return top albums URL', () => {
    let url = null;
    let rockstar = "Cher";

    url = apiUrl.structureRockstarDetails(rockstar)

    expect(url).not.toBe(null)
  })

})
