import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { CookieService } from 'ngx-cookie';

import { User } from '../models/user';
 
@Injectable()
export class AuthenticationService {
    private PHP_SCRIPT_URL: string = 'http://localhost/test/test-Angular-PHP/src/assets/authentication.php';
    
    constructor(private http: Http, private _cookieService: CookieService){ }

    public signIn(login: string, password: string) {
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        
        return this.http.post(this.PHP_SCRIPT_URL, JSON.stringify({ login: login, password: password }), { headers: headers })
            .catch((error:any) => {return Observable.throw(error);});                
    }


    public isLogged(): boolean {
        if(this._cookieService.get('id') === undefined) {
            return false;
        }
    
        return true;
    }


    public setCookie(name: string, value: string): void {
        this._cookieService.put(name, value);
    }


    public getCookie(name: string): string {
        return this._cookieService.get(name);
    }

    
    public logOut(): void {
        this._cookieService.removeAll();
    }
}