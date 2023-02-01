import {Routes} from "@angular/router";
import {DummyComponent} from "./dummy.component";
import {SampleResolver} from "../shared/sample.resolver";
import {SampleGuardGuard} from "../shared/sample-guard.guard";
import {DummyChildComponent} from "./dummy-child/dummy-child.component";

export const routesDummy: Routes = [
  {
    path: "dummy/:id",
    component: DummyComponent,
    data: {
      someData:  "someData"
    },
    resolve: {
      resolve: SampleResolver
    },
    canActivate: [
      SampleGuardGuard,
    ],
    canActivateChild : [
      SampleGuardGuard
    ],
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
  }
];
