import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
	
	countryID: number;
	minAge: number;
	maxAge: number;
	countryCode: any[];
	country: any[];
	flag: any[];
	cInfo: any[];
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
	

  }
	
	//This saves the info taken in from the user to storage.
	//navCtrl.pop is used to send the user back to the Home page.
	saveInfo() {
	console.log('hello countryID');
	this.storage.set("countryID", this.countryID);
	
	console.log('hello saveMinAge');
	this.storage.set("minAge", this.minAge);
	
	console.log('hello saveMaxAge');
	this.storage.set("maxAge", this.maxAge);
	
	this.navCtrl.pop();
	}
	
	//This is used to clear saved info from storage when Cancel is pressed.
	clearInfo(){
	console.log('clearing info');
	this.storage.set("countryID", null);
	this.storage.set("minAge", null);
	this.storage.set("maxAge", null);
	this.storage.set("country", null);
	this.storage.set("countryCode", null);
	this.storage.set("myInfo", null);
	this.navCtrl.pop();
	}
	
	
	//CountryID, country, countryCode, minAge, maxAge are all received from storage here.
	ionViewWillEnter(){
	this.storage.get("countryID")
	.then((countID) => {
	if (countID == null){
	console.log('ID is null');
	alert("Please enter Country ID!");
	}
		this.countryID = countID;
		console.log('setting countryID to countID');	
	})
	
	.catch((err) => {
		alert("Error collecting data");
		});
		
		this.storage.get("country")
			.then((cName) => {
			this.country = cName;
			console.log('setting country to cName'+ this.country);	
	})
	this.storage.get("countryCode")
			.then((cCode) => {
			this.country = cCode;
			console.log('setting country to cCode'+ this.countryCode);	
	})
	
		
	this.storage.get("minAge")
	.then((min) => {
		this.minAge = min;
		console.log('setting minAge to min');
	})	
	
	this.storage.get("maxAge")
	.then((max) => {
		this.maxAge = max;
		console.log('setting maxAge to max');	
	})
	
	

	
	}
	
	
}
