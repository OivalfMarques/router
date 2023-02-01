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

  externalUrl = this.locationStrategy.prepareExternalUrl('dummy3')

  constructor(
    private router: Router,
    private locationStrategy: LocationStrategy
  ) {
  }

  navigate(event : MouseEvent) {
    event.stopImmediatePropagation();
    event.preventDefault();
    this.router.navigate(['dummy3'], {}).then((navigate) => {
      console.log("AppComponent#navidate" , navigate)
    })
  }
}
