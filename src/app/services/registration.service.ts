import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from '../models/user';
 
@Injectable()
export class RegistrationService{
    PHP_SCRIPT_URL: string = 'http://localhost/test/test-Angular-PHP/src/assets/user_controller.php';
    constructor(private http: Http){ }

    addUser(user: User) {
        const body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.post(this.PHP_SCRIPT_URL, body, { headers: headers })
            .map((resp:Response) => resp.json())
            .catch((error:any) => {return Observable.throw(error);}); 
    }
}