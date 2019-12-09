 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MainComponent } from './main.component';
import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  declarations: [MainComponent],
  providers: [LoginComponent],
})
export class MainModule {}