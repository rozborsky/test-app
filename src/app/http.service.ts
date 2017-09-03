import {Http} from '@angular/http';
import {Response} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
@Injectable()
export class HttpService{
 
    constructor(private http: Http){ }
     
    getMessages(){
        return this.http.get('http://localhost/test/test-Angular-PHP/src/assets/dbManager.php');               
    }
}