import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-send-dash',
  templateUrl: 'send-dash.html',
})
export class SendDashPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendDashPage');
  }

}
