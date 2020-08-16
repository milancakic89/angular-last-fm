import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpened: boolean = false;
  constructor(private service: AppService) { }

  ngOnInit(): void {
  }
  onToggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
    this.service.resetInfiniteScroll()
  }

}
