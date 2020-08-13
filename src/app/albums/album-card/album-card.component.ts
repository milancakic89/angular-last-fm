import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {
  @Input() album: any;
  constructor(private service: AppService) { }

  ngOnInit(): void {
  }
  onToggleModal(){
    this.service.modalEmiter.emit(this.album)
  }
}
