import { ExportexcelService } from './../services/exportexcel.service';
import { Item } from './../interfaces/item.interface';
import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {map} from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-remesadetail',
  templateUrl: './remesadetail.component.html',
  styles: []
})

@Injectable()
export class RemesadetailComponent implements OnInit {
  remesas: any[] = [];
  urlExportable: string;
  id: number;
  items: any[]=[];
  item: Item;
  total: number;
  exportable: any[] = [];
  datoExcel: any = [{
    eid: 'e101',
    ename: 'ravi',
    esal: 1000
    },{
    eid: 'e102',
    ename: 'ram',
    esal: 2000
    },{
    eid: 'e103',
    ename: 'rajesh',
    esal: 3000
    }];

    nombreArchivo: string ;
    exportando: any;

  constructor(private http: Http, private route: ActivatedRoute, private router: Router, private _exportexcel: ExportexcelService) { 

    this.route.params
      .subscribe(
      (parametros) => {
        this.id = parametros['id']

        let ide : number = this.id;
        this.urlExportable = this.getExport(this.id);
        console.log('keo enfemro:', this.urlExportable);
        console.log("el id es este numero" , ide);
        console.log(this.id)
       console.log("es distinto de 0")

          this.getRemesa(this.id)
            .subscribe(data => {
              this.remesas = data;
              console.log("esta es la remesa",data)
            });

            this.getSumaConsignment(this.id)
            .subscribe(total => {
              this.total = total;
              console.log("este es el total", total)
            });
            this.getNombreExcel(this.id)
            .subscribe(nombreArchivo => {
              this.nombreArchivo = nombreArchivo;
              console.log("el nombre del archivo es ", nombreArchivo)
            });
            //this del formato json del item
            this.getFormatoJsonItems(this.id)
            .subscribe(exportable => {
              this.exportable = exportable;
              console.log("json exportable es ", exportable)
            });
            
            this.getItemForRemesa(this.id)
            .subscribe(items => {
              this.items = items;
              console.log("esto son los items", items)
            });
      });


  }

  ngOnInit() {

    }
//metodo que refresca la pagina despues de actualizar el estado del item(aprobado o rechazado)

  refresh() {
    setTimeout(() => {
      window.location.reload();
    }, ); // Activate after 5 minutes.
  }

  //metodo para obtener una remesa 
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


  //metodo que cambia el estado de un item
  //http://localhost:8080/api/consignment/2/item/80/aprobado
  cambiarEstado(item: Item, id1: number, id2: number , estado: string) {
    let itemURL= 'http://localhost:8080/api/consignment/'
    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let url = `${itemURL}${id1}/item/${id2}/${estado}`;
    console.log("url del boton aprobar item",url);
    if(estado == "aprobado"){
      if (window.confirm('¿Esta Seguro que desea Aprobar el item?')){
        return this.http.put(url, body, { headers})
          .subscribe(
            data =>{
              console.log(data)
              this.refresh();
            }
          )

       }

    }
    else{
      if (window.confirm('¿Esta Seguro que desea Rechazar el item?')){
        return this.http.put(url, body, { headers})
          .subscribe(
            data =>{
              console.log(data)
              this.refresh();
            }
          )

       }

    }


  }
//fin del metodo

//method that return total sum money consignment in relationship items
getSumaConsignment(id_consignment$: number){
  //http://localhost:8080/api/consignment/127/total
  let remesaURL = 'http://localhost:8080/api/consignment/'
  let url = `${remesaURL}${id_consignment$}/total`;
   return this.http.get(url)
     .pipe(
       map(

          res => res.json()

        )
      );

  }

  //metodo para obtener el nombre del archivo exportable excel
  getNombreExcel(id_consignment$: number){
    let remesaURL = 'http://localhost:8080/api/consignment/'
    let url = `${remesaURL}${id_consignment$}/nombre`;
   return this.http.get(url)
     .pipe(
       map(

          res => res.text()

        )
      );

  }

  //metodo que retorna el archivo exportable
  getExport(id_consignment$: number){
    let remesaURL = 'http://localhost:8080/api/consignment/'
    let url = `${remesaURL}${id_consignment$}/export`;
    console.log('url del export es :', url);
     return url;


  }
  //metodo que extrae el json con el formato de los items de acuerdo a la UPF
  getFormatoJsonItems(id_consignment:number){
    let urlFormatoJson = 'http://localhost:8080/api/consignment/';
    let url = `${urlFormatoJson}${id_consignment}/items/excel`;
    return this.http.get(url)
     .pipe(
       map(

          res => res.json()

        )
      );
  }
  

  //metodo para generar el excel
  exportarExcel(dato: any, nombre: string) {
    this._exportexcel.generateExcel(this.exportable, nombre);
  }


}
