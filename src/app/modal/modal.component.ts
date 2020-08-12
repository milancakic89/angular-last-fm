import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
@Input() modalOpened: boolean;

  toggleModal: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  onToggleModal(){
    this.toggleModal = !this.toggleModal;
  }

}
