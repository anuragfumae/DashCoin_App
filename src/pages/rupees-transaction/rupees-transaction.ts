import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';


@Component({
  selector: 'page-rupees-transaction',
  templateUrl: 'rupees-transaction.html',
})
export class RupeesTransactionPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RupeesTransactionPage');
  }

}
