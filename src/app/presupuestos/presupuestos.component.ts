import { Router } from '@angular/router';
import { PresupuestosService } from './../services/presupuestos.service';
import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Presupuesto } from '../interfaces/presupuesto.interface';



@Component({
  selector: 'app-typography',
  templateUrl: './presupuestos.component.html',
  styles: []
})


export class TypographyComponent implements OnInit {
  presupuestos: any[] = [];
  presupuesto: Presupuesto;

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

  //metodo que refresca la pagina despues de actualizar el estado del item(aprobado o rechazado)

  refresh() {
    setTimeout(() => {
      window.location.reload();
    }, ); // Activate after 5 minutes.
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

  //http://localhost:8080/api/budget/128/activo
  cambiarEstado(presupuesto: Presupuesto, id1: number, estado: string) {
    let budgetURL= 'http://localhost:8080/api/budget/'
    let body = JSON.stringify(presupuesto);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let url = `${budgetURL}${id1}/${estado}`;
    console.log("url del boton inactivar budget",url);
    if(estado == 'inactivo'){
      if (window.confirm('¿Esta Seguro que desea enviar a la papelera el presupuesto?')){
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

}
