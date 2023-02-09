import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Data, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  public title!: string;
  public eventSubs$!: Subscription;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.eventSubs$ = this.getBreadcrumbs().subscribe(({ title }) => {
      this.title = title;
      document.title = title;
    });
  }

  ngOnInit(): void {}

  public getBreadcrumbs() {
    return this.router.events.pipe(
      filter((filter) => filter instanceof ActivationEnd),
      filter((filter: any) => filter?.snapshot.firstChild === null),
      map((data: ActivationEnd) => data.snapshot.data)
    );
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy Breadcrumbs');
    this.eventSubs$.unsubscribe();
  }
}
