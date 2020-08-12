import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  isModalOpened: boolean = true;
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.modalEmiter.subscribe((modal: boolean) => {
      this.isModalOpened = modal;
    })
  }
  onRemoveModal() {
    this.service.modalEmiter.emit(false);
  }
  onSelectTrack() {
    console.log('track selected')
  }
}
