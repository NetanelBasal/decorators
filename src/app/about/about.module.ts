import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";
import { AboutIdComponent } from "./about-id/about-id.component";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [AboutComponent, AboutIdComponent]
})
export class AboutModule {

}
