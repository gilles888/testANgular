import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule, 
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule
  ],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
