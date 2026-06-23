import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem
  ]
})
export class Tab4Page {

  plato: string = '';
  cantidad: string = '';

  constructor() {}

  ionViewWillEnter() {
    this.plato = localStorage.getItem('plato') || '';
    this.cantidad = localStorage.getItem('cantidad') || '';
  }

}