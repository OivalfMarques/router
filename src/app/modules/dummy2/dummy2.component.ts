import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dummy2',
  templateUrl: './dummy2.component.html',
  styleUrls: ['./dummy2.component.scss']
})
export class Dummy2Component implements OnInit {

  params$ = this.activatedRoute.params;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
