import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginPage } from './../login/login';
import { AlertController } from 'ionic-angular';
import { BackandService } from '@backand/angular2-sdk';



@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage implements OnInit{

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private fb: FormBuilder, private backand:BackandService) {
  }
  public userdt:any;
  signupForm: FormGroup;

    ngOnInit() {

        this.signupForm = this.fb.group({
           'firstName': [null, Validators.compose([
             	Validators.required, 
             	//Validators.pattern("^([a-zA-Z]{2,}\\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\\s?([a-zA-Z]{1,})?)*$")
             	])],
            'lastName': [null, Validators.compose([
             	Validators.required, 
             	//Validators.pattern("^([a-zA-Z]{2,}\\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\\s?([a-zA-Z]{1,})?)*$")
             	])],
           'email' : [null, Validators.compose([
             	Validators.required,
             	Validators.email,
             	Validators.pattern('^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$')
             ])],
           'password': [null, Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])],
           'confirmPassword': [null, Validators.compose([Validators.required, Validators.minLength(3),Validators.maxLength(50)])]
         });
    }

    public signUp(){

    console.log("Status", this.signupForm)
    if(this.signupForm.status == "VALID"){
        console.log("Valid :- ",this.signupForm  )
        
        console.log("Email :- ", this.signupForm.value.email)
        console.log("First Name :- ",this.signupForm.value.firstName)
        console.log("Last Name :- ",this.signupForm.value.lastName)
        console.log("Password :- ", this.signupForm.value.password)
        console.log("RE Password :- ", this.signupForm.value.confirmPassword)

        this.backand.signup(this.signupForm.value.firstName, this.signupForm.value.lastName, this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.confirmPassword)
      .then((data: any) => {
      	this.userdt = data;
      	this.userdt['message'] = "Signup done successfully !"
      this.showAlert(this.userdt);
      console.log(data, "svniodribidfhidfhi")
         // alert('Sign up succeeded');
          this.email = this.signUpPassword = this.confirmPassword = this.firstName = this.lastName = '';
      },
      (err: any) => {
          console.log(err)
      }
    );

//this.userdt = data;
              //this.showAlert(this.userdt);
       // console.log(newRegister)

        
    }
  }

  
       showAlert(dt) {
          let alert = this.alertCtrl.create({
            title: 'SignUp Status!',
            subTitle: dt.message,
            buttons: [{
              text:'OK',
              handler: () => {
                this.gotoLoginPage();
                }
            }]
          });
        alert.present();
      }

  gotoLoginPage(){
  	console.log("Hiii Hiii")
    this.navCtrl.setRoot(LoginPage)
    // this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
