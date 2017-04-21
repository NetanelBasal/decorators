import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from "./home.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PasswordFormComponent } from "../password-form/password-form.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, PasswordFormComponent]
})
export class HomeModule {
}
