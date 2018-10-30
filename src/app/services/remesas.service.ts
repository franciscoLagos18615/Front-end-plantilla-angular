import { Remesa } from './../interfaces/remesa.interface';
import { Injectable } from '@angular/core';

import {Http, Headers} from '@angular/http';

import {map} from 'rxjs/operators';

@Injectable()
export class RemesasService {

  remesasURL = 'http://localhost:8080/api/consignment/new';
  remesaURL = 'http://localhost:8080/api/consignment/';
  remesasAll = 'http://localhost:8080/api/consignment/all';
  constructor( private http: Http) { }

  nuevaRemesa(remesa: Remesa) {
    let body = JSON.stringify(remesa);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
   return this.http.post(this.remesasURL, body, { headers})
       .pipe(
         map(res => {
           console.log(res.json());
           return res.json(); }
           ));
   }


   actualizarRemesa(remesa: Remesa, id_consignment$:number) {
    let body = JSON.stringify(remesa);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let url = `${this.remesaURL}${id_consignment$}`;
   return this.http.put(url, body, { headers})
       .pipe(
         map(res => {
           console.log(res);
           return res; }
           ));

  }
/** 
   
   actualizarRemesa(remesa: Remesa, key$: string) {
    let body = JSON.stringify(remesa);
    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${this.remesaURL}/${key$}`;
   return this.http.put(url, body, { headers})
       .pipe(
         map(res => {
           console.log(res.json());
           return res.json(); }
           ));
   }

*/
   

   getRemesa(id_consignment$: number){
     let url = `${this.remesaURL}${id_consignment$}`;
     return this.http.get(url)
       .pipe(
         map(
           res => res.json()
         )
       );
   }


   getRemesas(){
    return this.http.get(this.remesasAll)
      .pipe(
        map(res=>res.json());
      )
  }

}
