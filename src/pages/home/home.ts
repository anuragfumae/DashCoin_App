import { Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import { ListPage } from './../list/list';
import { SellPage } from './../sell/sell';
import { RupeesTransactionPage } from './../rupees-transaction/rupees-transaction';
import { DashTransactionPage } from './../dash-transaction/dash-transaction';
import { ReceiveDashPage } from './../receive-dash/receive-dash';
import { SendDashPage } from './../send-dash/send-dash';
import { PancardVerificationPage } from './../pancard-verification/pancard-verification';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

    openPage(page) {
        if(page == "ListPage")
            this.navCtrl.setRoot(ListPage);
        else if(page == "SellPage")
            this.navCtrl.setRoot(SellPage);
        else if(page == "DashTransactionPage")
            this.navCtrl.push(DashTransactionPage);
        else if(page == "RupeesTransactionPage")
            this.navCtrl.push(RupeesTransactionPage);
        else if(page == "ReceiveDashPage")
            this.navCtrl.push(ReceiveDashPage);
        else if(page == "SendDashPage")
            this.navCtrl.push(SendDashPage);
        else if(page == "PancardVerificationPage")
            this.navCtrl.push(PancardVerificationPage);
        else
            console.log("Something wrong");
    }
}
