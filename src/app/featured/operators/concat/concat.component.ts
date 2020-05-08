import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { of, concat } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.getConcat()
  }

  getConcat() {
    concat(of("world", "hello")).subscribe(res => {
      this.service.print(res, 'element1')
      console.log(res)
    })
  }



}
