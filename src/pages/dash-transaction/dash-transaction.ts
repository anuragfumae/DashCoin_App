import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-dash-transaction',
  templateUrl: 'dash-transaction.html',
})
export class DashTransactionPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashTransactionPage');
  }

}
