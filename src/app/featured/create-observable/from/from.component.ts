import { Component, OnInit } from '@angular/core';
import { of, Subscription, from } from 'rxjs';
import { map, filter, scan, tap } from 'rxjs/operators';
import { ListService } from './../../../shared/services/list.service';
@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  constructor(private service:ListService) { }

  ngOnInit(): void {
    this.getArray()
  }

  getArray() {
    const array = [10, 20, 30];
    const result = from(array);
    result.subscribe(x =>{
      let argument = 'item ' + x
      this.service.print(argument, 'element1')
    });
  }

  getMap() {
    const array = [10, 20, 30];
    const result = from(array);
    result.subscribe(x =>{
      let argument = 'item ' + x
      this.service.print(argument, 'element1')
    });
  }

}
