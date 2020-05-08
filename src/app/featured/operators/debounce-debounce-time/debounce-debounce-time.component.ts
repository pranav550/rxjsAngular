import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { of, timer, interval, fromEvent } from 'rxjs';
import { debounce, map, debounceTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-debounce-time',
  templateUrl: './debounce-debounce-time.component.html',
  styleUrls: ['./debounce-debounce-time.component.css']
})
export class DebounceDebounceTimeComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getDebounce()
    this.getDebounceTime()
  }

  getDebounce() {
    //emit value every 1 second, ex. 0...1...2
    const interval$ = interval(2000);
    //raise the debounce time by 200ms each second
    const debouncedInterval = interval$.pipe(take(5), debounce(val => timer(val * 200)));
    const subscribe = debouncedInterval.subscribe(val =>
      this.list.print(val, 'element1')
    );
  }

  getDebounceTime() {
    const searchBox = document.getElementById('search');
    const keyup$ = fromEvent(searchBox, 'keyup')
    keyup$.pipe(
      map((i: any) => i.currentTarget.value),
      debounceTime(500)
    ).subscribe(res => {
      console.log(res)
      this.list.print(res, 'element2')
    });
  }

}
