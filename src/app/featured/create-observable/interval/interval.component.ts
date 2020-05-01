import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { timer, interval } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor(private service:ListService) { }

  ngOnInit(): void {
    this.getTakeUtil()
  }

  getTakeUtil() {
    const timer$ = timer(10000);
    let source= interval(1000)
   source.pipe(takeUntil(timer$)).subscribe(data=>{
     console.log(data)
    let TakeUtilVal = 'item ' + data
    this.service.print(TakeUtilVal, 'element7')
   })
  }

}
