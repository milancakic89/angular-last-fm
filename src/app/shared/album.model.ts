export class Album {
  public name: string;
  public image: Array<Object>;
  public artist: { name: string };

  constructor(name: string, image: Array<Object>, artist: { name: string }) {
    this.name = name;
    this.image = image;
    this.artist = artist;
  }
}
