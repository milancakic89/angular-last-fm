import { Component} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMenuOpened = false;


  onToggleMenu() {
    this.isMenuOpened = !this.isMenuOpened;

  }

}
