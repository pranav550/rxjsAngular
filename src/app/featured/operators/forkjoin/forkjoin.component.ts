import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin, of, timer } from 'rxjs';

@Component({
  selector: 'app-forkjoin',
  templateUrl: './forkjoin.component.html',
  styleUrls: ['./forkjoin.component.css']
})
export class ForkjoinComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getForkJoin()
  }

  getForkJoin() {
    forkJoin(
      of(1, 2, 3, 4),
      Promise.resolve(8),
      timer(2000)
    ).subscribe(res => {
      this.list.print(res, 'element1')
    })
  }

}
