import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  constructor(private service: AppService) { }

  ngOnInit(): void {
  }
  onToggleModal(){
    this.service.modalEmiter.emit(true)
  }
}
