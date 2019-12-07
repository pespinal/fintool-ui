 
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule
  ],
  exports: [
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {}