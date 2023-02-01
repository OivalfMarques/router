import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DummyModule} from "./modules/dummy/dummy.module";
import {Dummy2Component} from "./modules/dummy2/dummy2.component";
import {Dummy3Component} from "./modules/dummy3/dummy3.component";
import {Dummy2Module} from "./modules/dummy2/dummy2.module";
import {Dummy3Module} from "./modules/dummy3/dummy3.module";
import {DummyRoutingModule} from "./modules/dummy/dummy-routing.module";

const routes: Routes = [
  {
    path:'dummyLazy',
    loadChildren: async () =>  DummyRoutingModule,
  },
  {
    path: "dummy2/:someParams",
    component: Dummy2Component
  },
  {
    path: "dummy3",
    component: Dummy3Component
  },
  {
    path: "",
    redirectTo: "dummy/100",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes ,{
      enableTracing : false,
    }),
    DummyRoutingModule,
    // RouterModule.forChild(routes),
    DummyModule,
    Dummy2Module,
    Dummy3Module,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
