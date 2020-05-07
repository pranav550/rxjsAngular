import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, toArray, filter, every } from 'rxjs/operators';

@Component({
  selector: 'app-every',
  templateUrl: './every.component.html',
  styleUrls: ['./every.component.css']
})
export class EveryComponent implements OnInit {
  users = [
    { "name": "test1", "coranaPatient": true },
    { "name": "test2", "coranaPatient": false },
    { "name": "test3", "coranaPatient": false },
    { "name": "test4", "coranaPatient": false },
    { "name": "test5", "coranaPatient": false }
  ]
  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.getEvery()
  }

  getEvery() {
    const source3 = from(this.users);
    source3.pipe(every(val => val.coranaPatient == false)).subscribe(res => {
      this.service.print(res, 'element1')
    })


  }

}
