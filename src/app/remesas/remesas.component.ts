import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { RemesasService } from '../services/remesas.service';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-list',
  templateUrl: './remesas.component.html',
})
export class TableListComponent implements OnInit {
  remesas: any[] = [];

  constructor(private _remesasService: RemesasService, private router: Router, private http: Http) { 
    this._remesasService.getRemesas()
        .subscribe(data => {
          console.log(data);
          this.remesas = data;

          });
        }

  ngOnInit() {
    this.allRemesas()
  }

  allRemesas(){
    this._remesasService.getRemesas()
      .subscribe(data =>{
        this.remesas = data;
      });
  }

  //metodo para borrar una remesa
  borraRemesa(key$: number){

    //this._remesasService.borrarRemesa(key$)
    let remesaURL = 'http://localhost:8080/api/consignment/'
    let url = `${remesaURL}${key$}`;
    console.log("aquii",url);
    if(window.confirm('¿Esta seguro que desea Eliminar esta remesa ?')){
      //put your delete method logic here
      return this.http.delete(url).subscribe(
        ()=>{
          this.allRemesas();
        }
      )
     }
  }

  //metodo para obtener una remesa


}
