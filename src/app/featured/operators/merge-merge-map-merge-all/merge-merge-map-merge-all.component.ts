import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { mergeMap, take, mergeAll, map, delay } from 'rxjs/operators';

@Component({
  selector: 'app-merge-merge-map-merge-all',
  templateUrl: './merge-merge-map-merge-all.component.html',
  styleUrls: ['./merge-merge-map-merge-all.component.css']
})
export class MergeMergeMapMergeAllComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getMergeMap()
    this.getMergeAll()
  }

  getMergeMap() {
    of('a', 'b', 'c').pipe(mergeMap(x => interval(1000).pipe(take(3)))).subscribe(res => {
      this.list.print(res, 'element1')
    })
  }


  getMergeAll() {
    interval(500).pipe(take(5)).pipe(
      map(val => interval(500).pipe(take(5)).pipe(delay(1000), take(3))),
      mergeAll(2)
    ).subscribe(val => {
      this.list.print(val, 'element2')
      //console.log(val)
    });
  }


}
