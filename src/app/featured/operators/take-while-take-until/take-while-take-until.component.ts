import { ListService } from './../../../shared/services/list.service';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-take-while-take-until',
  templateUrl: './take-while-take-until.component.html',
  styleUrls: ['./take-while-take-until.component.css']
})
export class TakeWhileTakeUntilComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getTakeUntil()
    this.getTakeWhile()
  }

  getTakeUntil() {
    const source = interval(1000)
    const clicks = fromEvent(document.getElementById('btn'), 'click');
    source.pipe(takeUntil(clicks)).subscribe(res => {
      this.list.print(res, 'element1')
      console.log(res)
    })
  }

  getTakeWhile() {
    const source = interval(1000)
    source.pipe(takeWhile(n => n <= 5)).subscribe(res => {
      this.list.print(res, 'element2')
      console.log(res)
    })
  }

}
