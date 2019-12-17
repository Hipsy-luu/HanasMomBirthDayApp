import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hana',
  templateUrl: './hana.page.html',
  styleUrls: ['./hana.page.scss'],
})
export class HanaPage implements OnInit {

  constructor(private alertController : AlertController) { }

  ngOnInit() {
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: '¡Cafe servido!',
      message: 'Fibi se ha servido una taza de cafe n.n .',
      buttons: ['OK']
    });

    await alert.present();
  }
}
