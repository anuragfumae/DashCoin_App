import { Component, ViewChild, OnInit } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BackandService } from '@backand/angular2-sdk';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
 res: string;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private backand:BackandService ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
console.log(page);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

   getList(): void {
        this.res = 'fetching objects...';
        this.backand.object.getList('users').then((res: any) => {
          this.res = `${res.data.length} objects fetched`;
          console.log(res);
        })
      }

        ngOnInit(): void{
      console.log("djsgvsdgudsg")
          this.backand.init({
        appName: 'mydashapp',
        signUpToken: '416145bb-eb6b-4ace-b51a-6144587b3d93',
        anonymousToken: '3e90a839-3a3e-41c9-af4c-23bf3cbaed01',
        mobilePlatform: 'ionic'
        });
        var x =this.getList();
        console.log("xxxxxxx", x);
    }

}
