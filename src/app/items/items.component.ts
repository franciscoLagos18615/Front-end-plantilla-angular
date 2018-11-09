import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/items.service';
import {Item} from '../interfaces/item.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styles: []
})
export class ItemsComponent implements OnInit {

  item: Item = {
    bill_number: 120,
    budget_item: "",
    detail: "",
    money: 10,
    name_item: "",
    provider: "",
    purchase_order: "",
    resolution: 1,
    rut: "",
    status: "",
    type_gast: "cambio prueba nueva",

  };

  nuevo: boolean = false;
  id: number;
  id1: string;
  id2: string;
  seCreo:boolean = false;
  seActualizo:boolean = false;

  constructor(private location: Location, private _itemsService: ItemsService, private router: Router, private route: ActivatedRoute) {

    this.id1 = this.route.snapshot.paramMap.get("id1")
    this.id2 = this.route.snapshot.paramMap.get("id2");
    console.log(this.id1)
    console.log(this.id2)
    this.route.params
      .subscribe(
      (parametros) => {
        this.id = parametros['id']
        console.log("id del item",this.id)


      });

  }

  ngOnInit() {
  }

  guardarItem(){
    console.log("este es el item",this.item)
    let numberId1: number = this.id1;
    this._itemsService.nuevoItem(this.item,this.id1)
    .subscribe(data=>{
      

      let ruta= `/remesa/${this.id1}/item/${this.id2}`
      console.log("ruta es", ruta)
      this.router.navigateByUrl(ruta);
      
      this.seCreo=true;

    },
    error => console.error(error));


  }

  //boton back
  goBack(): void {
    this.location.back();
  }

}
