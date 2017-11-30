import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from './../list/list';
/**
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html',
})
export class SellPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellPage');
  }
    
goToBuyPage() {
this.navCtrl.setRoot(ListPage);
}
}
