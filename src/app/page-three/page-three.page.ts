import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule, MenuController} from '@ionic/angular';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.page.html',
  styleUrls: ['./page-three.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class PageThreePage {
  constructor(private menuCtrl: MenuController) {}

  openStartMenu(idOrSide: string, enable: boolean = false) {
    if (enable) {
      this.menuCtrl.enable(true, idOrSide);
    }
    this.menuCtrl.open(idOrSide);
  }
}
