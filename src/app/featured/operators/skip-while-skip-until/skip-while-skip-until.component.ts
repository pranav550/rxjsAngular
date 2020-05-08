import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { interval, fromEvent } from 'rxjs';
import { skipWhile, skipUntil, delay } from 'rxjs/operators';

@Component({
  selector: 'app-skip-while-skip-until',
  templateUrl: './skip-while-skip-until.component.html',
  styleUrls: ['./skip-while-skip-until.component.css']
})
export class SkipWhileSkipUntilComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getSkipWhile()
    this.getSkipUntil()
  }

  getSkipWhile() {
    let source = interval(1000).pipe(skipWhile(val => val > 3)).subscribe(res => {
      this.list.print(res, 'element1')
      if (res >= 8) {
        source.unsubscribe()
      }
    })
  }

  getSkipUntil() {
    const clicks = fromEvent(document.getElementById('btn'), 'click');
    let source = interval(1000).pipe(skipUntil(clicks)).subscribe(res => {
      this.list.print(res, 'element2')
      // console.log(res)
      if (res >= 8) {
        source.unsubscribe()
      }
    })
  }

}
