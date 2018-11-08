import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {map} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-remesadetail',
  templateUrl: './remesadetail.component.html',
  styles: []
})
export class RemesadetailComponent implements OnInit {
  remesas: any[] = [];
  id: number;
  items: any[]=[];
  
  constructor(private http: Http, private route: ActivatedRoute, private router: Router) { 

    this.route.params
      .subscribe(
      (parametros) => {
        this.id = parametros['id']

        let ide : number = this.id;
        console.log("el id es este numero" , ide);
        console.log(this.id)
       console.log("es distinto de 0")

          this.getRemesa(this.id)
            .subscribe(data => {
              this.remesas = data;
              console.log("esta es la remesa",data)
            })
            this.getItemForRemesa(this.id)
            .subscribe(items => {
              this.items = items;
              console.log("esto son los items",items)
            });
      });


  }

  ngOnInit() {
  }


  getRemesa(id_consignment$: number){
    let remesaURL = 'http://localhost:8080/api/consignment/'
    let url = `${remesaURL}${id_consignment$}`;
    return this.http.get(url)
      .pipe(
        map(
          res => res.json()

        )
      );
  }

  //metodo que retorna el listado de items de una remesa
  getItemForRemesa(id_consignment$: number){
    let itemURL = 'http://localhost:8080/api/consignment/'
    let itemAllForRemesas = `${itemURL}${id_consignment$}/items`;
    return this.http.get(itemAllForRemesas)
      .pipe(
        map(res => res.json() )
      );
  }

}
