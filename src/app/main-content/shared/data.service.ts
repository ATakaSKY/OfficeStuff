import { Injectable } from '@angular/core';
import { IData } from './data';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import "rxjs/Rx"

@Injectable()

export class DataService{
	private _dataUrl = 'Data/data.json';

	constructor(private _http:Http){}

	getData():Observable<IData>{
			return this._http.get(this._dataUrl)
			.map((res:Response)	=> <IData>res.json())
			
			.catch(this.handleError); 
	  }

	  private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}