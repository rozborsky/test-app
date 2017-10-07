import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Message } from '../models/message';
 
@Injectable()
export class MessageService{
    PHP_MESSAGE_SCRIPT_URL: string = 'http://localhost/test/test-Angular-PHP/src/assets/message_controller.php';
    PHP_USER_SCRIPT_URL: string = 'http://localhost/test/test-Angular-PHP/src/assets/user_controller.php';

    constructor(private http: Http){ }

    public getMessages(): Observable<Response> {
        return this.http.get(this.PHP_MESSAGE_SCRIPT_URL);               
    }

    public addMessage(message: Message): Observable<Response> {
        const body = JSON.stringify(message);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.post(this.PHP_MESSAGE_SCRIPT_URL, body, { headers: headers })
            .catch((error:any) => {return Observable.throw(error);}); 
    }

    public deleteMessage(id: string): Observable<Response> {
        return this.http.delete(this.PHP_MESSAGE_SCRIPT_URL +'/' + id);    
    }

    public updateMessage(message: Message): Observable<Response> {
        const body = JSON.stringify(message);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.put(this.PHP_MESSAGE_SCRIPT_URL, body, { headers: headers } );
    }

    public getUsers(): Observable<Response> {
        return this.http.get(this.PHP_USER_SCRIPT_URL);               
    }
}