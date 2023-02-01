import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {routesDummy} from "./dummy.routes";



@NgModule({
  imports: [RouterModule.forChild(routesDummy)],
  exports: [RouterModule],
  declarations: [],
})
export class DummyRoutingModule {
}
