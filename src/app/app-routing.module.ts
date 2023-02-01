import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DummyComponent} from "./modules/dummy/dummy.component";
import {DummyModule} from "./modules/dummy/dummy.module";
import {Dummy2Component} from "./modules/dummy2/dummy2.component";
import {Dummy3Component} from "./modules/dummy3/dummy3.component";
import {Dummy2Module} from "./modules/dummy2/dummy2.module";
import {Dummy3Module} from "./modules/dummy3/dummy3.module";
import {DummyChildComponent} from "./modules/dummy/dummy-child/dummy-child.component";

const routes: Routes = [
  {
    path: "dummy/:id",
    component: DummyComponent,
    data: {
      someData:  "someData"
    },
    children: [
      {
        path: "",
        component: DummyChildComponent,
      },
      {
        path: ":child",
        component: DummyChildComponent,
        data: {
          someDataChild:  "someDataChild"
        },
      }
    ]
  },
  {
    path: "dummy2/:someParams",
    component: Dummy2Component
  },
  {
    path: "dummy3",
    component: Dummy3Component
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    DummyModule,
    Dummy2Module,
    Dummy3Module,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
