import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import {Item} from './../interfaces/item.interface';
import {map} from 'rxjs/operators';


@Injectable()
export class ItemsService {
  itemURL = 'http://localhost:8080/api/consignment/'
  itemURLAll = 'http://localhost:8080/api/consignment/{consignmentId}/items'


  constructor(private http: Http) { }


  //metodo para un nuevo item de acuerdo a un id_consignment

  nuevoItem(item: Item, id_consignment$: number) {
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let itemNewUrl = `${this.itemURL}${id_consignment$}${"/item/new"}`;
    console.log("esta es la url del item nuevo",itemNewUrl);
     return this.http.post(itemNewUrl, body, { headers})
       .pipe(
         map(res => {
           console.log(res.json());
           return res.json(); }
           ));
   }

  //metodos para obtener todas las remesas de acuerdo a un id

  getItemForRemesa(id_consignment$: number){

    let itemAllForRemesas = `${this.itemURL}${id_consignment$}/items`;
    return this.http.get(itemAllForRemesas)
      .pipe(
        map(res => res.json() )
      );
  }

  //metodo para editar un item
  //consignment/{consignmentId}/item/{itemId}
  actualizarItem(item: Item, id_consignment$: number, item_id$: number) {
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let url = `${this.itemURL}${id_consignment$}/item/${item_id$}`;
     return this.http.put(url, body, { headers})
       .pipe(
         map(res => {
           console.log(res);
           return res; }
           ));

  }

  //metodo que obtiene un item
 //consignment/{consignmentId}/item/{itemId}
  getItem(id_consignment$: number, item_id$: number){
    let url = `${this.itemURL}${id_consignment$}/item/${item_id$}`;
    return this.http.get(url)
      .pipe(
        map(
          res => res.json()
        )
      );
  }

}