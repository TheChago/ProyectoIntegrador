import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Departament } from '../models/departament';
import { Global } from './global';

@Injectable()
export class DepartamentService{
	public url:string;

	constructor(
		private _http: HttpClient
	){
		this.url = Global.url;
	}

	testService(){
		return 'Probando el servicio de Angular';
	}

	saveDepartament(departament: Departament): Observable<any>{
		let params = JSON.stringify(departament);
		let headers = new HttpHeaders().set('Content-Type','application/json');

		return this._http.post(this.url+'save-departament', params, {headers: headers});
	}

	getDepartaments(): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'departaments', {headers: headers});
	}

	getDepartament(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.get(this.url+'departament/'+id, {headers: headers});
	}

	deleteDepartament(id): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.delete(this.url+'departament/'+id, {headers: headers});
	}

	updateDepartament(departament): Observable<any>{
		let params = JSON.stringify(departament);
		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this._http.put(this.url+'departament/'+departament._id, params, {headers: headers});


	}
}