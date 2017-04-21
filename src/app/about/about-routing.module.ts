import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from "./about.component";
import { AboutIdComponent } from "./about-id/about-id.component";

const routes : Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: ':id',
        component: AboutIdComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule {
}
