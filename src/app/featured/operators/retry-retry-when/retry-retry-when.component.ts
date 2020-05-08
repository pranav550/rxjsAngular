import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { interval, throwError, of, timer, Subscription } from 'rxjs';
import { mergeMap, retry, map, retryWhen, tap, delayWhen, take } from 'rxjs/operators';

@Component({
  selector: 'app-retry-retry-when',
  templateUrl: './retry-retry-when.component.html',
  styleUrls: ['./retry-retry-when.component.css']
})
export class RetryRetryWhenComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getRetry()
    this.getRetryWhen()
  }


  getRetry() {
    const source = interval(1000)
    source.pipe(
      mergeMap(val => {
        //throw error for demonstration
        if (val > 5) {
          return throwError('Error!');
        }
        return of(val);
      }),
      //retry 2 times on error
      retry(2)
    ).subscribe(res => {
      this.list.print(res, 'element1')

    })
  }

  getRetryWhen() {
    const source = interval(1000);
    const example = source.pipe(take(10),
      map(val => {
        if (val > 5) {
          //error will be picked up by retryWhen
          throw val;
        }
        return val;
      }),
      retryWhen(errors =>
        errors.pipe(
          //log error message
          tap(val => console.log(`Value ${val} was too high!`)),
          //restart in 6 seconds
          delayWhen(val => timer(val * 1000))
        )
      )
    ).subscribe(res => {
      this.list.print(res, 'element2')
    })
  }

}
