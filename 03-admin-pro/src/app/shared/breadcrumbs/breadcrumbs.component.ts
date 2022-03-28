import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title!: string;
  public titleSubs$!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {

    // console.log(route.snapshot.children[0].data['title']);
    

    this.titleSubs$ = this.getRuta().subscribe(({ title }) => {
      document.title = `AdminPro - ${title}`;
      this.title = title;
    });

  }

  ngOnDestroy(): void {
    this.titleSubs$.unsubscribe();
  }

  getRuta() {
    return this.router.events
      .pipe(
        filter<any>(event => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data),
      );
  }

}
