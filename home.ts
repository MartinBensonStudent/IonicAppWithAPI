import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { CountriesProvider } from '../../providers/countries/countries';
import { FlagsProvider } from '../../providers/flags/flags'
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';
import {NgModule} from '@angular/core';
import { PlayersProvider } from '../../providers/players/players';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	
	quotes: any[]; 
	authors: any[];
	tags: any[];
	countryID: number;
	minAge: number;
	maxAge: number;
	country: any[];
	flag: any[];
	countryCode: any[];
	player: any[];
	surname: any[];
	age: any[];
	height: any[];
	cInfo: any[];
	
  constructor(public navCtrl: NavController, private qt:QuotesProvider, private ct:CountriesProvider, private fp:FlagsProvider, private pp:PlayersProvider, private storage: Storage, public alertCtrl: AlertController) {

  }
	
	//Loading the quotes information from provider here.
	
	ionViewWillEnter(){
	console.log('Here quotes');
		this.qt.getQuotes().subscribe(data => {
			this.authors = data.author;
			this.tags = data.tags;
			this.quotes = data.content;
			
	})
	//Setting countryID in storage.
		this.storage.get("countryID")
			.then((countID) => {
			this.countryID = countID;
			console.log('setting countryID to countID '+ this.countryID);	
	})
	
	.catch((err) => {
			alert("Error collecting data");
			});
	}
	//setting the country data from countries provider here.
	ionViewDidEnter(){	
	console.log('Here Country');
	this.ct.getCountry(this.countryID).subscribe(data => {
			this.country = data.data.name;
			this.countryCode = data.data.country_code;
			this.cInfo = data.data;
			console.log(this.country);
			console.log(this.countryCode);
			
	//setting storage for countryCode and country here.		
	console.log('hello countryCode');
	this.storage.set("countryCode", this.countryCode );
		
	console.log('hello country');
	this.storage.set("country", this.country );
		
	})
	
	//using promises here to ensure that minAge and maxAge are defined before calling the API url
	//this was done to avoid an error where these values were returning undefined
	const minAgePromise = this.storage.get("minAge");
	const maxAgePromise = this.storage.get("maxAge");
	
	Promise.all([minAgePromise, maxAgePromise]).then((values) => {
		this.minAge = values[0];
		this.maxAge = values[1];
		
		this.pp.getPlayers(this.countryID, this.minAge, this.maxAge).subscribe(data => {
			this.player = data.data;
			this.surname = data.data.surname;
			this.age = data.data.age;
			this.height = data.data.height;
		});
	});
	
		console.log('Here flags');
	this.fp.getFlags(this.flag).subscribe(data => {
		this.flag = data;
	})
	
}

//this button opens the Settings page.
	openSettingsPage(){
	console.log("In openSettingsPage function");
	this.navCtrl.push(SettingsPage);
		}
		
	
		
		
	}


