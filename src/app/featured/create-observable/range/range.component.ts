import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.css']
})
export class RangeComponent implements OnInit {
  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.getRange()
  }


  getRange() {
    const numbers = range(1, 5);
    numbers.pipe(map(n => n * n)).subscribe(x => {
      let rangeSub = "Range Emit " + x
      this.service.print(rangeSub, 'element1')
    })
  }

}
