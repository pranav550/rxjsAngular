import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { withLatestFrom, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-with-latest-from',
  templateUrl: './with-latest-from.component.html',
  styleUrls: ['./with-latest-from.component.css']
})
export class WithLatestFromComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getWithLatestFrom()
  }

  getWithLatestFrom() {
    //emit every 5s
    const source = interval(5000);
    //emit every 1s
    const secondSource = interval(1000);
    const example = source.pipe(take(5),
      withLatestFrom(secondSource),
      map(([first, second]) => {
        return `First Source (5s): ${first} Second Source (1s): ${second}`;
      })
    );
    /*
      "First Source (5s): 0 Second Source (1s): 4"
      "First Source (5s): 1 Second Source (1s): 9"
      "First Source (5s): 2 Second Source (1s): 14"
      ...
    */
    const subscribe = example.subscribe(val => {
      this.list.print(val, 'element1')
    });
  }

}
