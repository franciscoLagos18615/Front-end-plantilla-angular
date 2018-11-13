import { Router } from '@angular/router';
import { PresupuestosService } from './../services/presupuestos.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-typography',
  templateUrl: './presupuestos.component.html',
  styles: []
})


export class TypographyComponent implements OnInit {
  presupuestos: any[] = [];

  constructor(private _presupuestosService: PresupuestosService, private router: Router, private http: Http) { 
    this._presupuestosService.getPresupuestos()
      .subscribe(data => {
        console.log(data);
        this.presupuestos = data;

        });

  }

  ngOnInit() {
    this.allPresupuestos()
  }

  allPresupuestos(){
    this._presupuestosService.getPresupuestos()
      .subscribe(data =>{
        this.presupuestos = data;
      });
  }

  //metodo para borrar una remesa
  borraPresupuesto(key$: number){

    //this._remesasService.borrarRemesa(key$)
    let presupuestoURL = 'http://localhost:8080/api/budget/'
    let url = `${presupuestoURL}${key$}`;
    console.log("aquii",url);
    if(window.confirm('¿Estas seguro que desea Eliminar este presupuesto ?')){
      //put your delete method logic here
      return this.http.delete(url).subscribe(
        ()=>{
          this.allPresupuestos();
        }
      )
     }
  }

}
