import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, of } from 'rxjs';
import { map, take, concatAll } from 'rxjs/operators';
@Component({
  selector: 'app-concat-all',
  templateUrl: './concat-all.component.html',
  styleUrls: ['./concat-all.component.css']
})
export class ConcatAllComponent implements OnInit {

  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.getConcatAll()
  }

  getConcatAll() {
    let source1 = interval(1000).pipe(take(5));
    let source2 = interval(2000).pipe(take(3));
    let source3 = interval(2000).pipe(take(1));
    of(source1, source2, source3).pipe(concatAll()).subscribe(res => {
      this.service.print(res, 'element1')
    })
  }

}
