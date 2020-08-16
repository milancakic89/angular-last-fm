export class Album {
  public name: string;
  public image: [];
  public artist: { name: string }

  constructor(name: string, image: [], artist: { name: string }) {
    this.name = name;
    this.image = image;
    this.artist = artist;
  }
}