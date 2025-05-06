import { Observable, of as observableOf } from 'rxjs';

import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, shareReplay } from 'rxjs/operators';


@Injectable({
	providedIn: 'root'
})
export class HttpService {
 
    private readonly apiRoot: string = 'http://localhost:8000';

	//private readonly apiRoot: string = environment.apiBase;
	constructor(private readonly http: HttpClient) {}

	doPost(endpoint:any, payload:any) {
		const url = `${this.apiRoot}/${endpoint}`;
		return this.http.post(url, payload).pipe(map((response: any) => response));
	}

	doGet(endpoint:any) {
		
		const url = `${this.apiRoot}/${endpoint}`;
		return this.http.get(url).pipe(map((response: any) => response));
	}
	// doGetwith(endpoint) {
	
	// 	const url = `${this.apiRoot}/${endpoint}`;
	// 	return this.http.get(url).pipe(map((response: any) => response));
	// }
	doUpdate(endpoint:any, payload:any) {
		const url = `${this.apiRoot}/${endpoint}`;
		return this.http.put(url, payload).pipe(map((response: any) => response));
	  }
	//   doDelete(endpoint, payload) {
	// 	const url = `${this.apiRoot}/${endpoint}`;
	// 	return this.http.delete(url, payload).pipe(map((response: any) => response));
	// }
	// doDeleteWithBody(endpoint, payload) {
	// 	const url = `${this.apiRoot}/${endpoint}`;
	// 	const httpOptions = {
	// 		headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
	// 		body: payload
	// 	};
	// 	return this.http.delete(url, httpOptions).pipe(map((response: any) => response));
	// }
	doGetWithQueryParams(endpoint: string, params: HttpParams): Observable<any> {
		const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
		const url = `${this.apiRoot}/${endpoint}`;

		return this.http.get(url, { headers, params }).pipe(
			map(response => response)
		);
	}
	// doPostWithQueryParams(endpoint, params: HttpParams, payload) {
		
	//   const url = `${this.apiRoot}${endpoint}`;
	//   return this.http.post(url,payload,{ params }  ).pipe(map((response: any) => response));
	// }
}
