

import { KeysPipe } from './../../pipes/keys.pipe';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminLayoutRoutes} from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../remesas/remesas.component';
import { TypographyComponent } from '../../presupuestos/presupuestos.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {RemesaComponent} from '../../remesas/remesa.component';
import { RemesadetailComponent } from './../../remesas/remesadetail.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponent } from './../../items/items.component';
import { PresupuestoComponent } from '../../presupuestos/presupuesto.component';




import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    HttpModule,
    HttpClientModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    RemesaComponent,
    RemesadetailComponent,
    ItemsComponent,
    PresupuestoComponent,
    KeysPipe,
  ]
})

export class AdminLayoutModule {}
