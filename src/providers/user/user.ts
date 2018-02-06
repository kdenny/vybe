import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, RequestOptions, URLSearchParams, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Api } from '../api/api';

import {AuthConfig, AuthHttp, JwtHelper} from 'angular2-jwt';


/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  public token: string;
  _user: any;
  public currentNotifications;
  url: string = 'http://parrotapp.pythonanywhere.com/';
  isLoggedIn = false;
  public categories;
  public currentUsername;
  jwtHelper = new JwtHelper();
  public currentResident = null;

  constructor(public http: Http, public api: Api) {
    this.currentNotifications = null;
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    this.categories = [
      {
        name: 'Maintenance',
        notificationName: 'maintenance',
        link: "/maintenance",
        icon: 'assets/img/maintenance.png',
        pageName: "MaintenancePage"
      },
      {
        name: 'Packages',
        notificationName: 'packages',
        link: "/packages",
        icon: 'assets/img/package.png',
        pageName: "StaffPackagesPage"
      },
      {
        name: 'Other app here',
        link: "/other",
        icon: 'assets/img/question.png'
      },
      {
        name: 'Call front desk',
        link: "/call",
        icon: 'assets/img/phone.png'
      }

    ];
    if (localStorage.getItem(('currentUser'))) {
      this.currentUsername = this.jwtHelper.decodeToken(localStorage.getItem('currentUser')).username;
    }
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {

    let postUrl = this.url + 'login/';
    let headers = new Headers({'Content-Type': 'application/json'});
    let poptions = new RequestOptions({headers: headers});

    let body = accountInfo;

    return this.http.post(postUrl, body, poptions).toPromise()
      .then(response => {
        let token = response.json() && response.json().token;
          if (token) {
            // set token property
            this.token = token;
            console.log(this.token);
            this.isLoggedIn = true;
            this.api.addHeaders(token);
            this.currentUsername = accountInfo.username;
            console.log(this.currentUsername)
            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify({username: accountInfo.username, token: token}));
          }
        return response.json();
      });

  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this.isLoggedIn = false;
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }

  // Returns whether the user is currently authenticated
  // Could check if current token is still valid
  authenticated() : boolean {
    return this.isLoggedIn;
  }


  private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        //return
        //return Observable.throw(errMsg);
    }


}
