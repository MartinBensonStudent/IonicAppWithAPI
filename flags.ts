import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the FlagsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FlagsProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FlagsProvider Provider');
  }

	//This accesses the flag API and takes in countryCode as a variable.
	getFlags(countryCode): Observable<any> {
	return this.http.get("https://flagsapi.com/BA/shiny/" + countryCode + ".png");
	
	}

}
