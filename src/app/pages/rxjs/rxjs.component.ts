import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { retry, map, take, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit, OnDestroy {

  public intervalSubs!: Subscription;

  constructor() {
    /* this.returnObservable()
      .pipe(retry(2))
      .subscribe((valor) => console.log(valor)); */

   /*  this.intervalSubs = this.returnInterval().subscribe({
      next(value) {
        console.log('value: ', value);
      },
      error(err) {
        console.log('err: ', err);
      },
      complete() {
        console.log('Complete...');
      },
    }); */
  }

  ngOnInit(): void {}

  returnInterval(): Observable<number> {
    return interval(100).pipe(
     // take(4),
      map((value) => value + 1),
      filter(value => value % 2 === 0 ? true : false)
    );
  }

  returnObservable(): Observable<number> {
    return new Observable<number>((observer) => {
      let i = 0;
      const interval = setInterval(() => {
        i++;
        observer.next(i);
        console.log('tick', i);

        if (i === 4) {
          clearInterval(interval);
          observer.complete();
        }

        if (i === 2) {
          observer.error('I igual a 2');
        }
      }, 1000);
    });
  }

  ngOnDestroy(): void {
    //this.intervalSubs.unsubscribe();
  }

}
