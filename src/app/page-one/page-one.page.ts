import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-one',
  templateUrl: 'page-one.page.html',
  styleUrls: ['page-one.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class PageOnePage {
  constructor(private menuCtrl: MenuController) {}

  openStartMenu(idOrSide: string, enable: boolean = false) {
    if (enable) {
      this.menuCtrl.enable(true, idOrSide);
    }
    this.menuCtrl.open(idOrSide);
  }
}
