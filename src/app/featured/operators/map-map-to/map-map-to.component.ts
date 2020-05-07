import { ListService } from './../../../shared/services/list.service';
import { mapTo, take } from 'rxjs/operators';
import { interval, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-map-to',
  templateUrl: './map-map-to.component.html',
  styleUrls: ['./map-map-to.component.css']
})
export class MapMapToComponent implements OnInit {
  constructor(private service: ListService) { }

  ngOnInit(): void {
    this.getMapTo()
  }

  getMapTo() {
    let source = interval(1000)
    source.pipe(take(3), mapTo("Hi")).subscribe(res => {
      this.service.print(res, 'element1')
    })
  }

}
