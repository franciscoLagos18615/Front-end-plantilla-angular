import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import { Remesa } from '../interfaces/remesa.interface';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private userUrl = 'http://localhost:8080/api/test/user';
  private pmUrl = 'http://localhost:8080/api/test/pm';
  private adminUrl = 'http://localhost:8080/api/test/admin';
  private urlRemesa = 'http://localhost:8080/api/remesa/new';

  constructor(private http: HttpClient, private http2: Http) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  nuevaRemesa(remesa: Remesa) {
    let body = JSON.stringify(remesa);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
   return this.http2.post(this.urlRemesa, body, { headers})
       .pipe(
         map(res => {
           console.log(res.json());
           return res.json(); }
           ));
   }

}
