import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NgIf } from '@angular/common';
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [NgIf, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonImg],
})
export class HomePage {
  foto: string | null = null;

  constructor() {}

  async tirarFoto() {
    try {
      const imagem = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      this.foto = imagem.dataUrl!;
    } catch (error) {
      console.error('Erro ao tirar foto:', error);
    }
  }
}
