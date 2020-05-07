import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
  source = from([
    { name: 'Joe', age: 30 },
    { name: 'Sarah', age: 35 }
  ]);
  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.getPluck()
  }

  getPluck() {
    this.source.pipe(pluck('name')).subscribe(res => {
      this.service.print(res, 'element1')
      // console.log(res)
    })
  }

}
