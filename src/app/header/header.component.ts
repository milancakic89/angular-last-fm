import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMenuOpened = false;
  constructor(private service: AppService) { }

  onToggleMenu() {
    this.service.resetInfiniteScroll();
    this.isMenuOpened = !this.isMenuOpened;

  }

}
