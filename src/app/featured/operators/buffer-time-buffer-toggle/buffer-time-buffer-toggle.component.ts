import { ListService } from './../../../shared/services/list.service';
import { Component, OnInit } from '@angular/core';
import { bufferTime, take, bufferToggle } from 'rxjs/operators';
import { interval, fromEvent } from 'rxjs';

@Component({
  selector: 'app-buffer-time-buffer-toggle',
  templateUrl: './buffer-time-buffer-toggle.component.html',
  styleUrls: ['./buffer-time-buffer-toggle.component.css']
})
export class BufferTimeBufferToggleComponent implements OnInit {

  constructor(private list: ListService) { }

  ngOnInit(): void {
    this.getBufferTime()
    this.getBufferToggle()
  }

  getBufferTime() {
    interval(500).pipe(take(20), bufferTime(2000)).subscribe(res => {
      this.list.print(res, 'element1')
    })
  }

  getBufferToggle() {

  }

}
