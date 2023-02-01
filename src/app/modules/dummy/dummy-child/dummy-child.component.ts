import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dummy-child',
  templateUrl: './dummy-child.component.html',
  styleUrls: ['./dummy-child.component.scss']
})
export class DummyChildComponent implements OnInit {

  data$ = this.activatedRoute.data;
  params$ = this.activatedRoute.params;
  queryParams$ = this.activatedRoute.queryParams;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
