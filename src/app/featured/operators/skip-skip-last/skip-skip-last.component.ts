import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { take, skip, skipLast } from 'rxjs/operators';


@Component({
  selector: 'app-skip-skip-last',
  templateUrl: './skip-skip-last.component.html',
  styleUrls: ['./skip-skip-last.component.css']
})
export class SkipSkipLastComponent implements OnInit {
  users: any = [
    { name: "test1" },
    { name: "test2" },
    { name: "test3" },
  ]
  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getSkip()
    this.getSkipLast()
  }

  getSkip() {
    const source = from(this.users).pipe(skip(2)).subscribe(res => {
      this.list.print(res['name'], 'element1')
      //console.log(res)
    })
  }

  getSkipLast() {
    const source = from(this.users).pipe(skipLast(2)).subscribe(res => {
      this.list.print(res['name'], 'element2')
      //console.log(res)
    })
  }



}
