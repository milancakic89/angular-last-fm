import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  modalOpened: boolean = true;
  constructor(private service: AppService) {

  }
  ngOnInit() {
    this.service.test()
  }
}
