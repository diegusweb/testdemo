import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { VerifyComponent } from './verify/verify.component';
import { InfoComponent } from './info/info.component';

//este modulo cambiara
//camio para b3
//cambio 4 demo
// cambio segundo b4 el cambio se cambio

//demooo

@NgModule({
  imports: [
    FormsModule,
	
    DashboardRoutingModule,
    ChartsModule,
	
    BsDropdownModule,
	
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent, VerifyComponent, InfoComponent ]
})
export class DashboardModule { }

//cambio de branch test


//cambio de branch test feature5