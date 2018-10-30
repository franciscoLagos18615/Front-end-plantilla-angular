import { Component, OnInit } from '@angular/core';
import { RemesasService } from '../services/remesas.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './remesas.component.html',
})
export class TableListComponent implements OnInit {
  remesas: any[] = [];

  constructor(private _remesasService: RemesasService) { 
    this._remesasService.getRemesas()
        .subscribe(data => {
          console.log(data);
          for (let key$ in data){
            console.log(data[key$]);
            this.remesas.push(data[key$]);

          }
        })

  }

  ngOnInit() {
  }

}
