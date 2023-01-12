import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the PlayersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PlayersProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PlayersProvider Provider');
  }

	
	//This gets the players from the sportdataapi. It takes in countryID, minAge and maxAge as variables.
	getPlayers(countryID:number, minAge:number, maxAge: number): Observable<any> {
	return this.http.get("https://app.sportdataapi.com/api/v1/soccer/players?apikey="EnterYourAPIKeyHere"&country_id=" + countryID + "&min_age=" + minAge +"&max_age=" + maxAge);
	
	
	}

}
