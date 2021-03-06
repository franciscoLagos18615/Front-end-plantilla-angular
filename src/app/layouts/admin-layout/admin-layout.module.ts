

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
import { Ng2Rut } from 'ng2-rut';
import { PresupuestopapeleraComponent } from '../../presupuestos/presupuestopapelera.component';
import { RemesapapeleraComponent } from '../../remesas/remesapapelera.component';
import { RegisterComponent } from '../../register/register.component';
import { LoginComponent } from '../../login/login.component';
import { PaneladministracionComponent } from '../../paneladministracion/paneladministracion.component';
import { PaneladmineditComponent } from '../../paneladministracion/paneladminedit.component';
import { DetailsUploadComponent } from '../../upload/details-upload.component';
import { FormUploadComponent } from '../../upload/form-upload.component';
import { UserEditComponent } from '../../user-profile/user-edit.component';









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
    Ng2Rut,
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
    PresupuestopapeleraComponent,
    RemesapapeleraComponent,
    RegisterComponent,
    LoginComponent,
    PaneladministracionComponent,
    PaneladmineditComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    UserEditComponent,
    KeysPipe,
  ]
})

export class AdminLayoutModule {}
