import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LocationStrategy} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'router';


  constructor(
    private router: Router,
    private locationStrategy: LocationStrategy
  ) {
  }
}
