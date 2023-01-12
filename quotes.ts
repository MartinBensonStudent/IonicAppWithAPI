import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello QuotesProvider Provider');
  }
	
	//This accesses the quotable api and returns a random quote every time it is accessed.
	getQuotes(): Observable<any> {
	return this.http.get("https://api.quotable.io/random");
	
	}

}
