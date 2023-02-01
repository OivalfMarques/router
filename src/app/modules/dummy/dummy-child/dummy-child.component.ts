import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.router.navigate(["../",1001], {
      relativeTo: this.activatedRoute,
      replaceUrl: true,
    })
  }

}
