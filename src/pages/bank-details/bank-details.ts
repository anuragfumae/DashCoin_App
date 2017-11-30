import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PancardVerificationPage } from './../pancard-verification/pancard-verification';
import { AddressDetailsPage } from './../address-details/address-details'

@Component({
  selector: 'page-bank-details',
  templateUrl: 'bank-details.html',
})
export class BankDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    openPage(page) {
        if(page == "AddressDetailsPage")
            this.navCtrl.setRoot(AddressDetailsPage);
        else if(page == "PancardVerificationPage")
            this.navCtrl.setRoot(PancardVerificationPage);
        else
            console.log("Something wrong");
    }

}
