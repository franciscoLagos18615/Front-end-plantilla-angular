import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../services/presupuestos.service';
import { Presupuesto } from 'app/interfaces/presupuesto.interface';

@Component({
  selector: 'app-presupuestopapelera',
  templateUrl: './presupuestopapelera.component.html',
  styles: []
})
export class PresupuestopapeleraComponent implements OnInit {
  presupuestos: any[] = [];
  presupuesto: Presupuesto;

  constructor(private _presupuestosService: PresupuestosService, private router: Router , private http: Http) { 
    this._presupuestosService.getPresupuestosInactivos()
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
  //metodo que obtiene todos los presupuestos inactivos
  allPresupuestos(){
    this._presupuestosService.getPresupuestosInactivos()
      .subscribe(data =>{
        this.presupuestos = data;
      });
  }

  //metodo para borrar una remesa
  borraPresupuesto(key$: number) {

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
  }//fin metodo borrar

  cambiarEstado(presupuesto: Presupuesto, id1: number, estado: string) {
    let budgetURL= 'http://localhost:8080/api/budget/'
    let body = JSON.stringify(presupuesto);
    let headers = new Headers({
      'Content-Type':'application/json'
    });
    let url = `${budgetURL}${id1}/${estado}`;
    console.log("url del boton inactivar budget",url);
    if(estado == 'activo'){
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
