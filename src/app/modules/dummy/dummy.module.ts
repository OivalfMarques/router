import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy.component';
import { DummyChildComponent } from './dummy-child/dummy-child.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    DummyComponent,
    DummyChildComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class DummyModule { }
