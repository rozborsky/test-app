import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Message } from './message';
 
@Injectable()
export class HttpService{
 
    constructor(private http: Http){ }

    getMessages() {
        return this.http.get('http://localhost/test/test-Angular-PHP/src/assets/dbManagerGET.php');               
    }

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        
       return this.http.post('http://localhost/test/test-Angular-PHP/src/assets/dbManagerPOST.php', body, { headers: headers })
                       .map((resp:Response)=>resp.json())
                       .catch((error:any) =>{return Observable.throw(error);}); 
    }
}