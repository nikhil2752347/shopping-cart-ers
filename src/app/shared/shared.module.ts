import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [
  ],
})
export class SharedModule { }