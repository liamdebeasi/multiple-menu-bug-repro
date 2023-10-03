import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, MenuController} from '@ionic/angular';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class PageTwoPage {
  constructor(private menuCtrl: MenuController) {}

  openStartMenu(idOrSide: string, enable: boolean = false) {
    if (enable) {
      this.menuCtrl.enable(true, idOrSide);
    }
    this.menuCtrl.open(idOrSide);
  }
}
