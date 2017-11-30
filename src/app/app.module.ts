import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { BackandService } from '@backand/angular2-sdk';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SellPage } from '../pages/sell/sell';
import { DashTransactionPage } from '../pages/dash-transaction/dash-transaction';
import { RupeesTransactionPage } from '../pages/rupees-transaction/rupees-transaction';
import { ReceiveDashPage } from '../pages/receive-dash/receive-dash';
import { SendDashPage } from '../pages/send-dash/send-dash';
import { PancardVerificationPage } from '../pages/pancard-verification/pancard-verification';
import { BankDetailsPage } from '../pages/bank-details/bank-details';
import { AddressDetailsPage } from '../pages/address-details/address-details';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SellPage,
    DashTransactionPage,
    RupeesTransactionPage,
    ReceiveDashPage,
    SendDashPage,
    PancardVerificationPage,
    BankDetailsPage,
    AddressDetailsPage,
    SignupPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SellPage,
    DashTransactionPage,
    RupeesTransactionPage,
    ReceiveDashPage,
    SendDashPage,
    PancardVerificationPage,
    BankDetailsPage,
    AddressDetailsPage,
    SignupPage,
    LoginPage
  ],
  providers: [
    BackandService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
