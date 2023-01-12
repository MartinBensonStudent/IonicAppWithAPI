import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the CountriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountriesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CountriesProvider Provider');
  }

	//This accesses the sportdataapi info and takes in countryID as a variable.
	
	getCountry(countryID:number): Observable<any> {
	return this.http.get("https://app.sportdataapi.com/api/v1/soccer/countries/" + countryID + "?apikey=EnterYourAPIKeyHere");
	}
}
