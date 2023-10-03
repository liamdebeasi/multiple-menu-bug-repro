import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, MenuController } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink],
})
export class HomePage {
  constructor(private menuCtrl: MenuController) {}

  openStartMenu(idOrSide: string, enable: boolean = false) {
    if (enable) {
      this.menuCtrl.enable(true, idOrSide);
    }
    this.menuCtrl.open(idOrSide);
  }
}
