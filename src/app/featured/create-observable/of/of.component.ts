import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { of, Subscription, interval, fromEvent, timer  } from 'rxjs';
import { map, filter, scan, tap , take, delay, takeUntil  } from 'rxjs/operators';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.css']
})
export class OfComponent implements OnInit {
  initialAmount: number = 100;
  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.getArgument()
    this.getMap()
    this.getFilter()
    this.getScan()
    this.getTake()
    this.getDelay()
    
  }

  getArgument() {
    let ints = of(1, 2, 3, 4, 5);
    ints.subscribe(res => {
      let argument = 'item ' + res
      this.service.print(argument, 'element1')
    })
  }

  getMap() {
    let val = of(1, 2, 3, 4, 5);
    val.pipe(map(res => res * 10)).subscribe(data => {
      let mapVal = 'item ' + data
      this.service.print(mapVal, 'element2')
    })
  }

  getTake() {
    let val = of(1, 2, 3, 4, 5);
    val.pipe(
      map(res => res * 10),
      take(3),
      ).subscribe(data => {
      let takeVal = 'item ' + data
      this.service.print(takeVal, 'element5')
    })
  }

  getDelay() {
    let val = of(1, 2, 3, 4, 5);
    val.pipe(
      map(res => res * 10),
      take(3),
      delay(3000)
      ).subscribe(data => {
      let takeVal = 'item ' + data
      this.service.print(takeVal, 'element6')
    })
  }

 

  getFilter() {
    let ints = of(1, 2, 3, 4, 5);
    ints.pipe(
      filter(res1 => res1 % 2 == 0),
      map(res => res * 10)
    ).subscribe(data => {
      let mapVal = 'item ' + data
      this.service.print(mapVal, 'element3')
    })
  }

  getScan() {
    let ints = of(1, 2, 3, 4, 5);
    ints.pipe(
      filter(res1 => res1 % 2 == 0),
      map(res => res * 10),
      scan((sum, n) => sum + n, this.initialAmount)
    ).subscribe(data => {
      let mapVal = 'item ' + data
      this.service.print(mapVal, 'element4')
    })
  }


}
