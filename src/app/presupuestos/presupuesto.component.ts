import { PresupuestosService } from './../services/presupuestos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Presupuesto } from '../interfaces/presupuesto.interface';


@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styles: []
})
export class PresupuestoComponent implements OnInit {
  presupuesto: Presupuesto = {
    date: null,
    governance: '',
    budget: null,
    observation: '',
    status: 'activo',

  };

  nuevo: boolean = false;
  id: number;
  seCreo:boolean = false;
  seActualizo:boolean = false;

  constructor(private _presupuestoService: PresupuestosService, private route: ActivatedRoute,private router: Router ) {

    this.route.params
      .subscribe(
      (parametros) => {
        this.id = parametros['id']

        let ide : number = this.id;
        console.log("el id es este numero" , ide);
        console.log(this.id)
        if(ide > 0){
          console.log("es distinto de 0")

          this._presupuestoService.getPresupuesto(this.id)
            .subscribe(data => this.presupuesto = data)
        }

      });

   }

  ngOnInit() {
  }

  //metodo guardar
  guardar() {
    console.log(this.presupuesto);

    if(this.id == 0){
      console.log("es post");

      this._presupuestoService.nuevoPresupuesto(this.presupuesto)
      .subscribe(data=>{
        this.router.navigate(['/presupuesto', this.id]);
        this.seCreo=true;

      },
      error => console.error(error));

    }
    else{
      console.log("esta actualizando");
      this._presupuestoService.actualizarPresupuesto(this.presupuesto, this.id)
        .subscribe(data =>{
          this.seActualizo=true;
          console.log(data);

      },
      error => console.error(error));

    }

  }

}
