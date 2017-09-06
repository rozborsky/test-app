import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Message } from './message';
 
@Injectable()
export class HttpService{
    PHP_SCRIPT_URL: string = 'http://localhost/test/test-Angular-PHP/src/assets/dbManager.php';
    constructor(private http: Http){ }

    getMessages() {
        return this.http.get(this.PHP_SCRIPT_URL);               
    }

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        
        return this.http.post(this.PHP_SCRIPT_URL, body, { headers: headers })
                       .map((resp:Response)=>resp.json())
                       .catch((error:any) =>{return Observable.throw(error);}); 
    }

    deleteMessage() {
        return this.http.delete('http://localhost/test/test-Angular-PHP/src/assets/dbManagerDelete.php').map((res:Response) => res.json());
        
    }
}