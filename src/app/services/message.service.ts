import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Message } from '../models/message';
 
@Injectable()
export class MessageService{
    PHP_SCRIPT_URL: string = 'http://localhost/test/test-Angular-PHP/src/assets/message_controller.php';
    constructor(private http: Http){ }

    getMessages() {
        return this.http.get(this.PHP_SCRIPT_URL);               
    }

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.post(this.PHP_SCRIPT_URL, body, { headers: headers })
            .catch((error:any) => {return Observable.throw(error);}); 
    }

    deleteMessage(id: string) {
        return this.http.delete(this.PHP_SCRIPT_URL +'/' + id);    
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

        return this.http.put(this.PHP_SCRIPT_URL, body, { headers: headers } );
    }
}