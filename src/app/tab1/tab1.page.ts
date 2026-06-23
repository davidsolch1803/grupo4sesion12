import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    FormsModule
  ]
})
export class Tab1Page {

  usuario: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {

    if (
      this.usuario === 'David' &&
      this.password === '1234'
    ) {

      alert('Bienvenido David');

      this.router.navigate(['/tabs/tab2']);

    } else {

      alert('Usuario o contraseña incorrectos');

    }

  }

}