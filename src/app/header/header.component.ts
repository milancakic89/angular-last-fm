import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isMenuOpened: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  onToggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;
    console.log('Menu opened: ' + this.isMenuOpened);
  }

}
