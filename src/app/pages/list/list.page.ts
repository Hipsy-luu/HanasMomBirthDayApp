import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  constructor(private alertController : AlertController) { }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
  async abrazos() {
    const alert = await this.alertController.create({
      header: '¡Abrazoooooooooooo!',
      message: 'Fibi ha abrazado n.n.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
