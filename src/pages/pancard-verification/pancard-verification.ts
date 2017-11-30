import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BankDetailsPage } from './../bank-details/bank-details';
import { AddressDetailsPage } from './../address-details/address-details'


@Component({
  selector: 'page-pancard-verification',
  templateUrl: 'pancard-verification.html',
})
export class PancardVerificationPage {

  constructor(public navCtrl: NavController) {
  }

    openPage(page) {
        if(page == "AddressDetailsPage")
            this.navCtrl.setRoot(AddressDetailsPage);
        else if(page == "BankDetailsPage")
            this.navCtrl.setRoot(BankDetailsPage);
        else
            console.log("Something wrong");
    }

}
