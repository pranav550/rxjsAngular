import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { timer, combineLatest } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.css']
})
export class CombineLatestComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getCombineLatest()
  }

  getCombineLatest() {
    const timer1 = timer(1000, 4000);
    const timer2 = timer(2000, 4000);
    const timer3 = timer(3000, 4000);

    combineLatest(timer1, timer2, timer3).pipe(take(5)).subscribe(res => {
      this.list.print(res, 'element1')
      console.log(res)
    })
  }

}
