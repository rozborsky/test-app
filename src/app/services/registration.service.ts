import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';
 
@Injectable()
export class RegistrationService{
    PHP_SCRIPT_URL: string = 'http://localhost/test/test-Angular-PHP/src/assets/user_controller.php';

    constructor(private http: Http){ }

    public addUser(user: User): Observable<Response> {
        const body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.post(this.PHP_SCRIPT_URL, body, { headers: headers })
            .catch((error:any) => { return Observable.throw(error); }); 
    }
}