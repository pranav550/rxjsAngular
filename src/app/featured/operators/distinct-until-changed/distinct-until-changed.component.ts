import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.css']
})

export class DistinctUntilChangedComponent implements OnInit {
  users = [
    { name: "test1" },
    { name: "test1" },
    { name: "test2" },
    { name: "test2" },
    { name: "test3" }
  ]
  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.getDistinctUntilChanged()
  }

  getDistinctUntilChanged() {
    const source1 = from(this.users).pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name)).subscribe(res => {
      this.service.print(res.name, 'element1')

    });
  }

}
