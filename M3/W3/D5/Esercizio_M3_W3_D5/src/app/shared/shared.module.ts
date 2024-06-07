import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../pages/navbar/navbar.component';



@NgModule({
  declarations: [
        NavbarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,

  ]
})
export class SharedModule { }
