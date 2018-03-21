import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

//import {ApartmentAutocompleteService} from '../autocomplete/autocomplete';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  //url: string = 'http://packagerat.pythonanywhere.com/';
  //parrotUrl: string = 'http://parrotapp.pythonanywhere.com/';
  //url: string = 'http://127.0.0.1:8000/';
  url: string = 'https://vybe-198723.appspot.com/';
  packages;
  newPackages = null;
  scan = null;
  headers;

  constructor(public http: Http) {
  }

  //addPackages(body: any) {
  //  let postUrl = this.url + 'packages/';
  //  let poptions = new RequestOptions({ headers: this.headers });
  //
  //  let newPackages;
  //
  //  return this.http.post(postUrl, body, poptions).toPromise()
  //    .then(response => newPackages = response.json())
  //    .catch(this.handleError);
  //}

  getArtists() {
    let packagesUrl = this.url + 'load_artists/';
    let poptions = new RequestOptions({ headers: this.headers });

    let p2;

    return this.http.get(packagesUrl, poptions).toPromise()
      .then(response => {
        p2 = response.json();
        console.log(p2)
        return p2;
      });
  }

  //getPackagesByApartment(apartment_no) {
  //  let packagesUrl = this.url + 'packages/' + apartment_no;
  //  let poptions = new RequestOptions({ headers: this.headers });
  //
  //  let p2;
  //
  //  return this.http.get(packagesUrl, poptions).toPromise()
  //    .then(response => p2 = response.json());
  //}
  //
  //addPickup(body) {
  //  let packagesUrl = this.url + 'package_pickup/';
  //  let poptions = new RequestOptions({ headers: this.headers });
  //
  //  let p2;
  //
  //  return this.http.post(packagesUrl, body, poptions).toPromise()
  //    .then(response => p2 = response.json());
  //}
  //
  //checkBarcode(body) {
  //  let barcodeUrl = this.url + 'check_barcode/';
  //  let poptions = new RequestOptions({ headers: this.headers });
  //
  //  let p2;
  //
  //  return this.http.post(barcodeUrl, body, poptions).toPromise()
  //    .then(response => p2 = response.json());
  //}
  //
  //addHeaders(token) {
  //  this.headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token});
  //}
  //
  //getUsername(token) {
  //  let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'JWT ' + token});
  //  this.headers = headers;
  //  let poptions = new RequestOptions({ headers: headers});
  //  return this.http.get(this.parrotUrl + 'get_username/', poptions).toPromise()
  //    .then(response => response.json());
  //}
  //
  //getApartmentHome(aptNo) {
  //  let poptions = new RequestOptions({ headers: this.headers});
  //  return this.http.get(this.parrotUrl + 'resident/' + aptNo + '/home/', poptions).toPromise()
  //    .then(response => response.json());
  //}


  private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
