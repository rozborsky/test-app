import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
 
@Injectable()
export class HttpService{
 
    constructor(private http: Http){ }
     
    getMessages(){
        return this.http.get('assets/messages.json')
    }
}