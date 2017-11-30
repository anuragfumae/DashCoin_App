import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PancardVerificationPage } from './../pancard-verification/pancard-verification';
import { BankDetailsPage } from './../bank-details/bank-details';

@Component({
  selector: 'page-address-details',
  templateUrl: 'address-details.html',
})
export class AddressDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    openPage(page) {
        if(page == "BankDetailsPage")
            this.navCtrl.setRoot(BankDetailsPage);
        else if(page == "PancardVerificationPage")
            this.navCtrl.setRoot(PancardVerificationPage);
        else
            console.log("Something wrong");
    }

}
