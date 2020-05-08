import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { concatMap, take, concatMapTo } from 'rxjs/operators';

@Component({
  selector: 'app-concat-map-concat-map-to',
  templateUrl: './concat-map-concat-map-to.component.html',
  styleUrls: ['./concat-map-concat-map-to.component.css']
})
export class ConcatMapConcatMapToComponent implements OnInit {

  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.getConcatMap()
    this.getConcatMapTo()
  }

  getConcatMap() {
    const clicks = fromEvent(document.getElementById('btn'), 'click');
    clicks.pipe(
      concatMap(ev => interval(1000).pipe(take(4)))).subscribe(res => {
        this.service.print(res, 'element1')
      })
  }

  getConcatMapTo() {

    interval(2000).pipe(take(2),
      concatMapTo(interval(1000).pipe(take(1))),
    ).subscribe(x => {
      this.service.print(x, 'element2')
    });
  }

}
