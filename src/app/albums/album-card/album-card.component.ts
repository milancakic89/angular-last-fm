import { Component, Input } from '@angular/core';
import { AppService } from '../../app.service';
import { Album } from '../../shared/album.model';


@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
  @Input() album: Album;

  constructor(private service: AppService) { }

  onToggleModal() {
    this.service.modalEmiter.emit(this.album);
  }
}
