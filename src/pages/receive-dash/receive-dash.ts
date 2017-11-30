import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-receive-dash',
  templateUrl: 'receive-dash.html',
})
export class ReceiveDashPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiveDashPage');
  }

}
