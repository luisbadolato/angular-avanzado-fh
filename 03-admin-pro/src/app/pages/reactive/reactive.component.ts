import { Component, OnDestroy } from '@angular/core';
import { interval, map, Observable, retry, take, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styles: []
})
export class ReactiveComponent implements OnDestroy {

  public intervalSubs: Subscription;

  constructor() { 

    this.intervalSubs = this.returnInterval().subscribe( console.log );

  }
  ngOnDestroy(): void {
    // this.intervalSubs.unsubscribe();
  }

  returnInterval(): Observable<number> {

    return interval(100)
      .pipe(
        map(valor => valor + 1),
        filter(valor => valor % 2 === 0),
        take(10),
      );

  }


  returnObservable(): Observable<number> {
    
    let i: number = -1;

    const obs$ = new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        console.log('Interval:', i);
        i++;
        observer.next(i);
        if (i === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (i === 2) {
          observer.error('Error: "i" es 2');
        }
      }, 1000);

    });

    return obs$;
  }


}
