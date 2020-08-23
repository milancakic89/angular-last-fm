import { Component, Input } from '@angular/core';

import { Album } from '../../shared/album.model';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
  @Input() album: Album;

  constructor(private service: ModalService) { }

  onToggleModal() {
    this.service.modalEmiter.emit(this.album);
  }
}
