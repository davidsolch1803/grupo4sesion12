import { Component } from '@angular/core';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonButton,
  IonInput,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonButton,
    IonInput,
    IonSelect,
    IonSelectOption,
    FormsModule
  ]
})
export class Tab2Page {

  plato = '';
  cantidad = 1;

  constructor(private router: Router) {}

  confirmarPedido() {

    localStorage.setItem('plato', this.plato);
    localStorage.setItem('cantidad', this.cantidad.toString());

    this.router.navigate(['/tabs/tab3']);
  }

}