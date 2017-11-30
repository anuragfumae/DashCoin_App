import { Component, OnInit } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { BackandService } from '@backand/angular2-sdk';
import { AlertController } from 'ionic-angular';

import { HomePage } from './../home/home';
import { SignupPage } from './../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{
public userdt;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private backand:BackandService, public alertCtrl: AlertController) {
  }
  loginForm: FormGroup; 


  gotoRegisterPage(){
    this.navCtrl.push(SignupPage);
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
       'email' : [null, Validators.compose([
         Validators.required,
         Validators.minLength(3),
         // Validators.email,
         // Validators.pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')
         ])],
       'password': [null, Validators.compose([Validators.required, Validators.minLength(3)])]
     });
}

	signIn() {
        this.auth_type = 'Token';
        this.backand.signin(this.loginForm.value.email, this.loginForm.value.password)
            .then((data: any) => {
                console.log(data, "Successfull login");

           let alert = this.alertCtrl.create({
	            title: 'Login Done!',
	            subTitle: 'Login Successfull !',
	            buttons: [{
	              text:'OK',
	              handler: () => {
	                this.navCtrl.setRoot(HomePage);
	                }
	            }]
          });
        alert.present();

                this.auth_status = 'OK';
                this.is_auth_error = false;
                this.loggedInUser = data.data.username;
                this.username = '';
                this.password = '';
            },
            (error: any) => {

            	let alert = this.alertCtrl.create({
	            title: 'Login Error!',
	            subTitle: 'Something wrong happen !',
	            buttons: [{
	              text:'OK',
	              handler: () => {
	                //this.navCtrl.setRoot(HomePage);
	                }
	            }]
          });
        alert.present();
                console.log(error, "errorllrlren");
                let errorMessage: string = error.data.error_description;
                this.auth_status = `Error: ${errorMessage}`;
                this.is_auth_error = true;
                console.log(errorMessage)
                this.auth_status = 'ERROR';
            }
        );
    }


}
