import { Injectable } from '@angular/core';

@Injectable()
export class JsonService {
    
    public parseJson(gson: string): Array<Array<string>> {
        gson = gson.replace(/[{}]/g, '');
        let userValues =  gson.split(",");
        let result: Array<Array<string>> = [];

        for (let values of userValues){ 
            let array =  values.split(":");
            array[0] = array[0].replace(/"/g, '');
            array[1] = array[1].replace(/"/g, '');

            result.push(array);
        }
        return result;
    }
}