import { ListService } from './../../../shared/services/list.service';
import { interval } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { throttle, throttleTime, take } from 'rxjs/operators';

@Component({
  selector: 'app-throttle-throttle-time',
  templateUrl: './throttle-throttle-time.component.html',
  styleUrls: ['./throttle-throttle-time.component.css']
})
export class ThrottleThrottleTimeComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getThrottle()
    this.getThrottleTime()
  }

  getThrottle() {
    interval(1000).pipe(take(10), throttle(val => interval(2000))).subscribe(res => {
      this.list.print(res, 'element1')
    })
  }

  getThrottleTime() {
    interval(1000).pipe(take(20), throttleTime(5000)).subscribe(res => {
      this.list.print(res, 'element2')
    })
  }

}
